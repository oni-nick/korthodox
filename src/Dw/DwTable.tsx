import { Table, TableProps } from 'antd';
import {P2} from './Styles'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { columns } from './DWTableData';

interface DwHistory {
  amount: string,
  hash: string,
  timestamp: number,
  type: string,
}

function DwTable(){
    const [history, setHistory] = useState<DwHistory[]>([]);

    useEffect(() => {
        axios.get<DwHistory[]>('/api/user/dw/history')
        .then(res => {
          if (res.data) {
            setHistory(res.data)
          }
        });
    }, []);

    const onChange: TableProps<DwHistory>['onChange'] = (sorter) => {
    };

    return(
    <>
        <P2>입출금 내역</P2>
        <Table columns={columns} dataSource={history} onChange={onChange} size="large" />
    </>
    );
}




export default DwTable;