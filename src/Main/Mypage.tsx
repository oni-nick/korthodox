import { Descriptions, Table } from 'antd';
import { useUserState, UserInfo } from '../context/user';
import { Div, MypageDiv } from './Styles';
import { dateConverter, UserBalance } from '../Utils';
import axios from 'axios';
import { useState } from 'react';
import BigNumber from 'bignumber.js';

function Mypage(){
    const user = useUserState();

    const [balance, setBalance] = useState<UserBalance[]>([]);
    const adsBalance = balance.find(b => b.type === 'ADS')?.available || '0';

    axios.get<UserBalance[]>('/api/user/balance')
    .then(res => {
        if(res.data){
            setBalance(res.data)
        }
    })

    return(
        <MypageDiv>
            <Descriptions bordered size="default">
                <Descriptions.Item label="유저 이름"> {user.email}</Descriptions.Item>
                <Descriptions.Item label="보유 자산">{new BigNumber(adsBalance).toFormat()} ADS</Descriptions.Item>
                <Descriptions.Item label="가입 일자">{dateConverter(new Date(user.join_time))}</Descriptions.Item>
                <Descriptions.Item label="이용권 만료 기간">{dateConverter(new Date(user.expired_date))}</Descriptions.Item>
                <Descriptions.Item label="개인 지갑 주소"> {user.address}</Descriptions.Item>
            </Descriptions>
        </MypageDiv>
    );
}

export default Mypage;