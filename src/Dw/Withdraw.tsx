import { Button, Checkbox, Input, Radio, RadioChangeEvent } from 'antd';
import { P, DivWithdraw, Text, Text2 } from "./Styles"
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserInfo, useUserState, useUserDispatch } from '../context/user';
import BigNumber from 'bignumber.js';

function Withdraw(){
    const config = {
        FORMAT: {
            // string to prepend
            prefix: '',
            // decimal separator
            decimalSeparator: '.',
            // grouping separator of the integer part
            groupSeparator: ',',
            // primary grouping size of the integer part
            groupSize: 3,
            // secondary grouping size of the integer part
            secondaryGroupSize: 0,
            // grouping separator of the fraction part
            fractionGroupSeparator: ' ',
            // grouping size of the fraction part
            fractionGroupSize: 0,
            // string to append
            suffix: ''
          }
    };

    const [errMessage, setErrMessage] = useState('');
    const [text1, setText1] = useState('주소');
    const [text2, setText2] = useState('수량');
    const [currency, setCurrency] = useState('ADS');
    const [balance, setBalance] = useState<UserBalance[]>([]);
    const user = useUserState();

    function toggleCurrency(e: RadioChangeEvent){
        switch(e.target.value){
            case 'ads':
                setCurrency('ADS');
                setText1('주소');
                setText2('수량');
                break;
            case 'krw':
                setCurrency('KRW');
                setText1('계좌');
                setText2('금액');
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



    function renderBalance(){
        if (balance.length <= 0){
            return(<></>);
        }
        return(
            <div style={{ marginLeft : '20px'}}>
                <Text>잔액</Text><br/>
                <Text>{new BigNumber(balance[1].available).toFormat()} {balance[1].type}</Text><br/>
                <Text>{new BigNumber(balance[2].available).toFormat()} {balance[2].type}</Text>

            </div>
        );
    }
// console.log(new BigNumber(balance[2].available).toFormat());
//     <div style={{ marginLeft : '20px'}}>
//     <Text>총 보유 자산</Text>
//     <Text>{balance.length > 0 ? balance[1].type + '  ' + new BigNumber(balance[1].available).toFormat() : '잔액이 조회 되지않습니다.'}</Text>
//     <Text>{balance.length > 0 ? balance[2].type + '   ' + balance[2].available : '잔액이 조회 되지않습니다.'}</Text>
//      </div>
    return(
        <DivWithdraw>

            <div style={{ marginBottom : '10px'}}>
                출금 {text1} : &nbsp;
                <Input style={{display : 'inline-block', width : '350px', marginLeft : '5px'}} />
                <br/><br/>출금 {text2} : &nbsp;
                <Input style={{display : 'inline-block', width : '220px', marginLeft : '5px'}} type='number'/>
                &nbsp;  <Text2>{currency}</Text2> &nbsp;
                <Radio.Group onChange={toggleCurrency} defaultValue="ads" size="small">
                    <Radio.Button value="ads">ADS</Radio.Button>
                    <Radio.Button value="krw">KRW</Radio.Button>
                </Radio.Group>

            </div>
                {renderBalance()}
            <div>

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