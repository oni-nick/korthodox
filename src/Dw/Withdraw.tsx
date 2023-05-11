import { Button, Checkbox, Input, Radio, RadioChangeEvent } from 'antd';
import { P, DivWithdraw, Text, Text2, Text3, DivHash } from "./Styles"
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import BigNumber from 'bignumber.js';

function Withdraw(){

    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [tranHash, setTranHash] = useState<string>('');
    const [text1, setText1] = useState('주소');
    const [text2, setText2] = useState('수량');
    const [currency, setCurrency] = useState('ADS');
    const [balance, setBalance] = useState<UserBalance[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const withdraw = async () => {
        // loading, 여러번 클릭되지않도록
        setLoading(true);
        const result = await axios.post<string>('/api/user/withdrawal', {
            amount: amount,
            to: address,
        });
        // 잔액 갱신
        axios.get<UserBalance[] | null>('/api/user/balance')
        .then(res => {
          if (res.data) {
            setBalance(res.data)
          }
        });

        setTimeout(()=>{setLoading(false)});

        setTranHash(result.data);
        console.log(result.data);
        console.log(tranHash);
        // TODO: return 값은 hash, 보여주기
    };

    // ADS KRW 변환
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
        const adsBalance = balance.find(b => b.type === 'ADS')?.available || '0';
        const krwBalance = balance.find(b => b.type === 'KRW')?.available || '0';
        return(
            <div style={{ marginLeft : '20px'}}>
                <Text>잔액</Text><br/>
                <Text>{new BigNumber(adsBalance).toFormat()} ADS</Text><br/>
                <Text>{new BigNumber(krwBalance).toFormat()} KRW</Text><br/>
            </div>
        );
    }

    return(
        <DivWithdraw>

            <div style={{ marginBottom : '10px'}}>
                출금 {text1} : &nbsp;
                <Input id='address' onChange={(event) => setAddress(event.target.value)} style={{display : 'inline-block', width : '350px', marginLeft : '5px'}} />
                <br/><br/>출금 {text2} : &nbsp;
                <Input id='amount' onChange={(event) => setAmount(event.target.value)} style={{display : 'inline-block', width : '220px', marginLeft : '5px'}} type='number'/>
                &nbsp; <Text2>{currency}</Text2> &nbsp;
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

            <Button onClick={withdraw} style={{width: '300px'}}type="primary" htmlType="submit" loading={loading}>
                출금하기
            </Button>

            <DivHash style={{display : 'inline'}}>
                <Text3>{tranHash !== '' ? '[출금 완료] 트랜잭션 해시 : ' : ''}</Text3>
                <a href={`https://sepolia.etherscan.io/tx/${tranHash}`} target='_blank'>
                    {tranHash !== '' ? tranHash.slice(0,12) : '' }
                </a>
            </DivHash>

        </DivWithdraw>
    );
}

export default Withdraw;