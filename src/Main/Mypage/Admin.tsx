import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import axios from "axios";
import { useEffect, useState } from "react";
import PieGraph, { PieGraphData } from "./PieGraph";
import { AdminDiv, PieGraphDiv } from "./Styles";

interface AdminData {
    amount: string,
    hash: string | '',
    timestamp: number,
    type
       : '입금'
       | '출금'
       | '주행보상'
       | '광고등록'
       | '이용권구매'
       | '코인구매'
};

interface Accumulator{
    '입금' : number,
    '출금' : number,
    '주행보상' : number,
    '광고등록' : number,
    '이용권구매' : number,
    '코인구매' : number,
}

interface AdminProps{
    from : string;
    to : string;
}

const Admin : React.FC<AdminProps> = ({from, to}) => {
    const [adminData, setAdminData] = useState<AdminData[]>([]);
    const [isNone, setNone] = useState(true);
    useEffect(() => {
        axios.get<AdminData[]>('/api/statistics', {
            params: {
                from: from,
                to: to,
            },
        })
        .then((res) => {
            if (res.data) {
                setNone(false)
                setAdminData(res.data);
            }
        });
    }, [from, to]);

    // type별 amount 총합 구하기 - reduce 사용
    const totalAmount = adminData.reduce((accumulator, currentObject) => {
        const { amount, type } = currentObject;
        let key = type;
        if (type.startsWith('주행')){
            key = '주행보상';
        }
        if (!accumulator[key]){
            accumulator[key] = 0;
        }
        accumulator[key] += parseInt(amount);
        return accumulator;
      }, {} as Accumulator);

    // * 배열 변환 * , 키값 추가
    const totalAmountArray = Object.entries(totalAmount).map(([type, amount], index) => ({ key: index, type, amount }));

    // 파이 그래프 data 변환
    interface ColorMapping {
        [key: string]: string;
    }
    const colors : ColorMapping  = {
        "입금": "blue",
        "출금": "red",
        "주행보상": "green",
        "광고등록": "yellow",
        "이용권구매": "purple",
        "코인구매": "orange",
    }

    const pieChartData: PieGraphData[] = totalAmountArray.map((data) => ({
        id: data.type,
        label: data.type,
        value: data.amount,
        color: colors[data.type] || "gray", // use a default color if the type is not found in colors
      }));

    //const PieAmountData = totalAmount.map((data) =>{

    //})

    // Table Column 정의
    const columns: ColumnsType<{ type: string; amount: any; }> = [
        {
            align : 'center',
            title: '유형',
            dataIndex: 'type',
            render: (text) => text,
        },
        {
            align : 'center',
            title: '금액',
            dataIndex: 'amount',
            render: (text) => text,
          },
    ];

    return(
        <AdminDiv>
            {!isNone
            ?
            <>
                <PieGraphDiv>
                    <PieGraph data={pieChartData}/>
                </PieGraphDiv>
                <Table columns={columns} dataSource={totalAmountArray}/>
            </>
            : '통계 데이터가 없습니다'}
        </AdminDiv>
    );
}
export default Admin;