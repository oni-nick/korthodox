import { Table } from "antd";
import { ColumnsType } from 'antd/es/table';
import { AdsHisTable } from './Styles';
import Map from "./Map";
import { Link } from "react-router-dom";
import axios from "axios";
import { Ads } from "./AdsDetail";
import { useEffect, useState } from "react";

export interface AdsHistoryType{
  id : string,
  ads_id : number,
  path: {latitude: string, longitude: string}[],
  meters : number,
  hash : string,
  reward: string,
  start_time : Date,
  end_time : Date,
}

function AdsHistory({index} : {index:number}){

  const [adsHistory, setAdsHistory] = useState<AdsHistoryType[]>([]);

  useEffect(() => {
    axios.get<Ads>(`/api/ads/${index}`)
      .then((res) => {
        setAdsHistory(res.data.history)
      });
  }, [])

  function dateConvert(date : Date){
    const Year = date.getFullYear();
    const Month = date.getMonth()+1;
    const Day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const Date = Year  + '년 0' + Month + '월 ' + Day + '일 '
    const Date2 = Year  + '년 0' + Month + '월 ' + Day + '일 ' + hour + '시' + min + '분' + sec + '초';
    return(Date2);
  }

  const column : ColumnsType<AdsHistoryType>= [
    {
      align : 'center',
      title: '이용 시작',
      dataIndex: 'start_time',
      render: (text) => <p>{dateConvert(new Date(text))}</p>,
    },
    {
      align : 'center',
      title: '이용 종료',
      dataIndex: 'end_time',
      render: (text) => <p>{dateConvert(new Date(text))}</p>,
    },
    {
      align : 'center',
      title: '리워드',
      dataIndex: 'reward',
      render : (text) => <p>{text} ADS</p>
    },
    {
      align : 'center',
      title: '이용 거리',
      dataIndex: 'meters',
      render : (text) => <p>{text} m</p>
    },
    {
      align : 'center',
      title: '이동 경로',
      dataIndex: 'id',
      render: (text) => <Link to={`/ads/${index}/${text}`}>지도 보기</Link>,
    },
  ];
  return(
    <>
      <Table columns={column} dataSource={adsHistory} size="large" style={{width : '800px'}} />
    </>
  );
}

  export default AdsHistory;

