import { Table } from "antd";
import { ColumnsType } from 'antd/es/table';
import { AdsHisTable } from './Styles';
import Map from "./Map";
import { Link } from "react-router-dom";

export interface AdsHistoryType{
  id: number,
  user: string,
  reward: number,
  date: string,
  time: string,
  route: string,
}

function AdsHistory({index} : {index:number}){


  const data = [
    {
      'id': 1,
      'user': 'test',
      'reward': 12,
      'date': '2023-05-15',
      'time': '54분',
      'route': '서울역 -> 이수역',
    },
    {
      'id': 3,
      'user': 'test2',
      'reward': 1,
      'date': '2023-05-15',
      'time': '12분',
      'route': '사당역 -> 남태령역',
    },
  ]

  const column : ColumnsType<AdsHistoryType>= [
    {
      align : 'center',
      title: '광고 아이디',
      dataIndex: 'id',
    },
    {
      align : 'center',
      title: '사용자 아이디',
      dataIndex: 'user',
    },
    {
      align : 'center',
      title: '리워드',
      dataIndex: 'reward',
    },
    {
      align : 'center',
      title: '이용시간',
      dataIndex: 'time',
    },
    {
      align : 'center',
      title: '이용날짜',
      dataIndex: 'date',

    },
    {
      align : 'center',
      title: '이동경로',
      dataIndex: 'route',
      render: (text) => <Link to={`/ads/${index}/map`}>{text}</Link>,
    },
  ];
  return(
    <Table columns={column} dataSource={data} size="large" style={{width : '800px'}} />
  );
}

  export default AdsHistory;