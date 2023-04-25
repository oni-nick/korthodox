import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: React.Key;
    date: string;
    amount: number;
    isDW: string;
  }
  
  export const columns: ColumnsType<DataType> = [
    {
      title: '날짜',
      dataIndex: 'date',
    },
    {
      title: '금액',
      dataIndex: 'amount',
    },
    {
      title: '입/출금',
      dataIndex: 'isDW',
    },
  ];
  
  export const data: DataType[] = [
    {
      key: '1',
      date: '2022-04-01',
      amount: 3,
      isDW: '출금',
    },
    {
        key: '2',
        date: '2022-04-01',
        amount: 3,
        isDW: '입금',
      },
    {
        key: '3',
      date: '2022-04-01',
      amount: 3,
      isDW: '입금',
    },
    {
        key: '4',
      date: '2022-04-01',
      amount: 3,
      isDW: '입금',
    },
    {
        key: '5',
      date: '2022-04-01',
      amount: 3,
      isDW: '입금',
    },
    {
        key: '6',
      date: '2022-04-01',
      amount: 3,
      isDW: '입금',
    },
    {
        key: '7',
      date: '2022-04-01',
      amount: 3,
      isDW: '입금',
    },
    {
        key: '8',
      date: '2022-04-01',
      amount: 3,
      isDW: '입금',
    },
    {
        key: '9',
      date: '2022-04-01',
      amount: 3,
      isDW: '입금',
    },
    {
        key: '10',
      date: '2022-04-01',
      amount: 3,
      isDW: '입금',
    },
    {
        key: '11',
      date: '2022-04-01',
      amount: 3,
      isDW: '입금',
    },
    {
        key: '12',
      date: '2022-04-01',
      amount: 3,
      isDW: '입금',
    },
    
  ];
