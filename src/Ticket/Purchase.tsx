import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { Div, P } from "./Styles";
import { Button, Checkbox, Descriptions } from "antd";
import BigNumber from 'bignumber.js';
import { useEffect, useState } from "react";
import axios from "axios";
import { UserInfo, useUserDispatch } from '../context/user'

interface UserBalance {
    id: string,
    user_email: string,
    type: 'ADS' | 'ETH' | 'KRW',
    amount: string
    available: string
  }

function Purchase(){    
    const url = useLocation();
    const dispatch = useUserDispatch()
    const [searchParams, setSearchParams]=useSearchParams();
    const days = searchParams.get('days');
    const be_price = searchParams.get('price');
    const price = new BigNumber(be_price != null ? be_price : 0).toFormat();
    
    const [balance, setBalance] = useState<UserBalance[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    
    console.log(balance);

    const PurchaseClick = async () => {
        setLoading(true);
        // await
        // axios.post<UserInfo>('/api/user/buyticket', days)
        // .then(res => {
        //     if (res.data){
        //         return dispatch({type: 'LOG_IN', data: res.data})
        //     }
        // });
        axios.post('/api/user/buyticket', days);
        axios.get<UserBalance[] | null>('/api/user/balance')
        .then(res => {
          if (res.data) {
            setBalance(res.data)
          }
        });

        setTimeout(()=>{setLoading(false)});
    };

    // useEffect(() => {
    //     axios.post<UserInfo>('/api/user/buyticket', days)
    //     .then(res => {
    //         if (res.data){
    //             return dispatch({type: 'LOG_IN', data: res.data})
    //         }
    //     })
    // })

    return(
        <Div>
            <Descriptions bordered size="default">    
                <Descriptions.Item label="제품"> {days}일 이용권</Descriptions.Item>
                <Descriptions.Item label="가격">{price} ADS</Descriptions.Item>
                <Descriptions.Item label="결제 수단">ADS</Descriptions.Item>
                <Descriptions.Item label="상세 설명">
                {days}일간 AdsRider 서비스를 이용할 수 있는 티켓입니다.
                </Descriptions.Item>
            </Descriptions>
            <div>
                <P>※주의사항※<br/>구매일 기준 이용권 날짜가 갱신됩니다.<br/>ADS 코인으로 결제됩니다.</P>
                <Checkbox style={{margin : '10px 10px 30px 20px'}}>주의사항을 확인했습니다.</Checkbox>
            </div>
            <Button type="primary" loading={loading} onClick={PurchaseClick}>결제</Button>
        </Div>
    );     
}

export default Purchase;