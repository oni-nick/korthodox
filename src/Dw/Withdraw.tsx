import { Button, Checkbox, Input, Radio, RadioChangeEvent } from 'antd';
import { P, DivWithdraw, Text, Text2 } from "./Styles"
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserInfo, useUserState, useUserDispatch } from '../context/user';

function Withdraw(){
    const [errMessage, setErrMessage] = useState('');
    const [currency, setCurrency] = useState('ADS');
    const [balance, setBalance] = useState<UserBalance[]>([]);
    const user = useUserState();
    
    function toggleCurrency(e: RadioChangeEvent){
        switch(e.target.value){
            case 'ads': 
                setCurrency('ADS');
                break;
            case 'krw':
                setCurrency('KRW');
                break;

            }
            console.log(currency)
    }

    
    interface UserBalance {
        id: string,
        user_email: string,
        type: 'ADS' | 'ETH' | 'KRW',
        amount: string
        available: string
      }
      
    
    useEffect(() => {
        axios.get<UserBalance[] | null>('/api/user/balance')
        .then(res => {
          if (res.data) {
            setBalance(res.data)
          }
        });
    }, []);
    
    return(
        <DivWithdraw>
            
            <div style={{ marginBottom : '30px'}}>
                출금 주소 : &nbsp;
                <Input style={{display : 'inline-block', width : '350px', marginLeft : '5px'}} />
                <br/><br/>출금 수량 : &nbsp;
                <Input style={{display : 'inline-block', width : '220px', marginLeft : '5px'}} type='number'/>
                &nbsp;  <Text2>{currency}</Text2> &nbsp;
                <Radio.Group onChange={toggleCurrency} defaultValue="ads" size="small">
                    <Radio.Button value="ads">ADS</Radio.Button>
                    <Radio.Button value="krw">KRW</Radio.Button>
                </Radio.Group>
                
            </div>
            
            <div>
                <div style={{ marginLeft : '20px'}}>
                    <Text>총 보유 자산</Text>
                    <Text>{balance.length > 0 ? balance[1].type + '  ' + balance[1].available : '잔액이 조회 되지않습니다.'}</Text>
                    <Text>{balance.length > 0 ? balance[2].type + '   ' + balance[2].available : '잔액이 조회 되지않습니다.'}</Text>
                </div>
                <P>※주의사항※<br/>암호화폐 특성상 출금신청이 완료되면 취소가 불가하기 때문에, 출금 시 주소를 확인 후 입력해 주시기 바랍니다.</P>        
                <Checkbox style={{margin : '10px 10px 30px 20px'}}>동의합니다.</Checkbox>
            </div>
            <Button style={{width: '300px'}}type="primary" htmlType="submit">
                출금하기
            </Button>
        </DivWithdraw>
    );
}

export default Withdraw;