import axios from "axios";
import BigNumber from "bignumber.js";
import { useEffect, useState } from "react";
import {Text, Text2 } from "./Styles"
import { useUserState } from "../../context/user";

interface UserBalance {
    id: string,
    user_email: string,
    type: 'ADS' | 'ETH' | 'KRW',
    amount: string
    available: string
  }

function RenderBalance(){
    const [balance, setBalance] = useState<UserBalance[]>([]);
    const user = useUserState();

    useEffect(() => {
        axios.get<UserBalance[] | null>('/api/user/balance')
        .then(res => {
          if (res.data) {
            setBalance(res.data)
          }
        });
    }, []);

    if (balance.length <= 0){
        return(<></>);
    }

    const adsBalance = balance.find(b => b.type === 'ADS');

    return(
        <div style={{ marginLeft : '20px'}}>
          {
            adsBalance != null
              ? <Text>{new BigNumber(adsBalance.available).toFormat()} {adsBalance.type}</Text>
              : ''
          }
        </div>
    );
}

export default RenderBalance;