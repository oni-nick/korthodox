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

    return(
        <div style={{ marginLeft : '20px'}}>
            <Text>{new BigNumber(balance[1].available).toFormat()} {balance[1].type}</Text>
            <br/>
            <Text>{new BigNumber(balance[2].available).toFormat()} {balance[2].type}</Text>
        </div>
    );
}

export default RenderBalance;