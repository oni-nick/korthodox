import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import axios from "axios";
import { useEffect, useState } from "react";
import PieGraph from "./PieGraph";

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
    useEffect(() => {
        axios.get<AdminData[]>('/api/statistics', {
            params: {
                from: from,
                to: to,
            },
        })
        .then((res) => {
            if (res.data) {
                setAdminData(res.data);
            }
        });
    }, []);

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
        <>
            <Table columns={columns} dataSource={totalAmountArray}/>
        </>
    );
}
export default Admin;