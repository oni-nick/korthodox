import { Descriptions, Table } from 'antd';
import { useUserState, UserInfo } from '../context/user';
import { Div, MypageDiv } from './Styles';

function Mypage(){
    const user = useUserState();

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


    return(
        <MypageDiv>
            <Descriptions bordered size="default">    
                <Descriptions.Item label="유저 이름"> {user.email}</Descriptions.Item>
                <Descriptions.Item label="가입 일자">{dateConvert(new Date(user.join_time))}</Descriptions.Item>
                <Descriptions.Item label="이용권 만료 기간">{dateConvert(new Date(user.expireDate))}</Descriptions.Item>
                <Descriptions.Item label="개인 지갑 주소"> {user.address}</Descriptions.Item>
            </Descriptions>
        </MypageDiv>
    );
}

export default Mypage;