import { Table } from "antd";
import { ColumnsType } from 'antd/es/table';
import { AdsHisTable } from './Styles';
import Map from "./Map";
import { Link } from "react-router-dom";

export interface AdsHistoryType{
  reward: number,
  date: string,
  time: string,
}

function AdsHistory({index} : {index:number}){


  const data = [
    {
      'reward': 12,
      'date': '2023-05-15',
      'time': '54분',
    },
    {
      'reward': 1,
      'date': '2023-05-15',
      'time': '12분',
    },
  ]

  const column : ColumnsType<AdsHistoryType>= [
    {
      align : 'center',
      title: '이용 날짜',
      dataIndex: 'date',
    },
    {
      align : 'center',
      title: '리워드',
      dataIndex: 'reward',
      render : (text) => <p>{text} ADS</p>
    },
    {
      align : 'center',
      title: '이용 시간',
      dataIndex: 'time',
    },
    {
      align : 'center',
      title: '이동 경로',
      render: () => <Link to={`/ads/${index}/map`}>지도 보기</Link>,
    },
  ];
  return(
    <Table columns={column} dataSource={data} size="large" style={{width : '800px'}} />
  );
}

  export default AdsHistory;