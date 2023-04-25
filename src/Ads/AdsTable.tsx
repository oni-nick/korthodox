import { Table, Divider } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: React.Key;
    adsNum: string;
    adsName: string;
    adsAmount: string;
    adsDate: string;
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: '광고 번호',
      dataIndex: 'adsNum',
    },
    {
      title: '광고 이름',
      dataIndex: 'adsName',
    },
    {
      title: '광고 금액',
      dataIndex: 'adsAmount',
    },
    {
        title: '광고 기간',
        dataIndex: 'adsDate',
      },
  ];
  
  const data: DataType[] = [
    {
        key: 1,
        adsNum: '001',
        adsName: '배달의 민족',
        adsAmount: '3 ADS',
        adsDate: '2023-04-22 ~ 2023-04-25',
    },
    {
        key: 1,
        adsNum: '002',
        adsName: '완충e',
        adsAmount: '1 ADS',
        adsDate: '2023-04-22 ~ 2023-06-25',
    },
    {
        key: 1,
        adsNum: '003',
        adsName: '쿠팡 이츠',
        adsAmount: '5 ADS',
        adsDate: '2023-04-22 ~ 2023-05-5',
    },
 
  ];

function AdsTable(){
    return(
        <>
            <Divider>광고 내역</Divider>
            <Table columns={columns} dataSource={data} size="large" />
        </>
    );
}
export default AdsTable;