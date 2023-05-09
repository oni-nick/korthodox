import { Button, Checkbox, Input } from 'antd';
import { P, DivWithdraw, P2 } from "./Styles"
import axios, { AxiosError } from 'axios';
import Withdraw_Btn from "./Withdraw_Btn"
import { useState } from 'react';

function Withdraw(){

    const [errMessage, setErrMessage] = useState('');



    const userBalance = async (values: any) => {
        try {
            await axios.get('/api/user/balance');
        } catch (e) {
            const axiosError = e as AxiosError;
            if (axiosError.response?.status === 400) {
                setErrMessage('이미 등록된 ID 입니다.');
            } else {
                setErrMessage('예기치 못한 에러가 발생하였습니다 잠시후 시도해주세요.');
            }
        }
        console.log(errMessage);
        console.log()
    };
    
      
    return(
        <DivWithdraw>
            
            <div style={{ marginBottom : '30px'}}>
                출금주소:&nbsp;
                <Input style={{display : 'inline-block', width : '300px', marginLeft : '5px'}} id="Dadress" name="Dadress"/>
            </div>
            <Withdraw_Btn/>
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