import { Table } from 'antd';
import { useUserState, UserInfo } from '../context/user';
import { Div } from './Styles';
import { ColumnsType } from 'antd/es/table';

function Mypage(){
    const user = useUserState();
    const data = [user];

    function dateConvert(date : Date){
        const Year = date.getFullYear()
        const Month = date.getMonth()+1
        const Day = date.getDate()
        const Date = Year  + '년 0' + Month + '월 ' + Day + '일';
        return(Date);
      }

    interface UserInfo {
        email: string;
        level: string,
        address: string,
        expireDate : Date,
        join_time: Date,
    };


    const column : ColumnsType<UserInfo>= [
        {
          align : 'center',
          title: '이메일',
          dataIndex: 'email',
          render: (text) => <p>{(text)}</p>,
        },
        {
            align : 'center',
            title: '지갑 주소',
            dataIndex: 'address',
            render: (text) => <p>{(text)}</p>,
        },
        {
            align : 'center',
            title: '이용권 만료 기간',
            dataIndex: 'expireDate',
            render: (text) => <p>{dateConvert(new Date(text))}</p>,
        },
        {
            align : 'center',
            title: '가입 일자',
            dataIndex: 'join_time',
            render: (text) => <p>{dateConvert(new Date(text))}</p>,
        },
    ]

    return(
        <Div>
            <h2>마이페이지</h2>
            <Table columns={column} dataSource={data} size="large" style={{width : '1000px'}} />
        </Div>
    );
}

export default Mypage;