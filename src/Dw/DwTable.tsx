import { Table } from 'antd';
import {P2} from './Styles'
import {data, columns} from "./DWTableData"

function DwTable(){
    return(
    <>
        <P2>입출금 내역</P2>
        <Table columns={columns} dataSource={data} size="large" />

    </>
    );
}




export default DwTable;
