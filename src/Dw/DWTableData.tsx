import type { ColumnsType } from 'antd/es/table';
import BigNumber from 'bignumber.js';

export interface DwHistory {
  amount: string,
  hash: string,
  timestamp: number,
  type: string,
}

function dateConvert(date : Date){
  const Year = date.getFullYear()
  const Month = date.getMonth()+1
  const Day = date.getDate()
  const Date = Year  + '년 0' + Month + '월 ' + Day + '일';
  return(Date);
}

function typeChange(text : any){
  switch(text){
    case 'deposit':
      return <p>입금</p>
    case 'withdrawal':
      return <p>출금</p>
    case 'admin_mint':
      return <p>관리자</p>

    }

}


  export const columns: ColumnsType<DwHistory> = [
    {
      align : 'center',
      title: '날짜',
      dataIndex: 'timestamp',
      sorter: (a, b) =>b.timestamp - a.timestamp,
      render: (text) => <p>{dateConvert(new Date(text))}</p>,
    },
    {
      align : 'center',
      title: '금액',
      dataIndex: 'amount',
      render: (text) => <p>{new BigNumber(text).toFormat()}</p>
    },
    {
      align : 'center',
      title: '종류',
      dataIndex: '',
      render: () => <p>ADS</p>,
    },
    {
      align : 'center',
      title: '입/출금',
      dataIndex: 'type',
      render: (text) => <p>{typeChange(text)}</p>,
    },
    {
      align : 'center',
      title: '해시',
      dataIndex: 'hash',
      render: (text) => <a href={`https://sepolia.etherscan.io/tx/${text}`} target='_blank'>{text.slice(0, 12)}</a>,
    },
  ];
