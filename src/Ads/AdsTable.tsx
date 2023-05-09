import { useNavigate } from "react-router-dom";
import { Table } from 'antd';
import { Image } from 'antd';
import axios from 'axios';
import { Children, useEffect, useState } from 'react';
import { P } from "./Styles"

interface Ads {
  id: number;
  title: string;
  subtitle: string;
  image_id: number;
  reward: number;
  start_date: Date;
  end_date: Date;
  // user_email: string;
}

const columns = [
  {
    title: 'Image',
    dataIndex: 'image_id',
    key: 'image_id',
    render: (_: any, row: Ads) =>
      <Image
        width={100}
        src={'/api/image/' + row.image_id}
      />,
  },
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'SubTitle',
    dataIndex: 'subtitle',
    key: 'subtitle',
  },
  {
    title: 'Reward',
    dataIndex: 'reward',
    key: 'reward',
  },
];

function AdsTable(){

  const [ads, setAds] = useState<Ads[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get<Ads[]>('/api/ads')
      .then((res) => {
        setAds(res.data);
      });
  }, [])

  return(
    <>
      <P>광고 목록</P>
      <Table columns={columns} dataSource={ads} size="large" onRow={(record, rowIndex) => {
      let num_index = Number(rowIndex) + 1;
      return {
      onClick: (event) => {
        navigate(`/ads/${num_index}`)
      }
      
    };
  }} />
  
    </>
  );
}
export default AdsTable;