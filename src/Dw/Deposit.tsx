import {P, P2, DivDeposit} from "./Styles"
import { Button, Checkbox, Form, Input } from 'antd';

function Deposit(){

    return (
        <DivDeposit>
            <div style={{ marginTop : '30px'}}>
                입금주소
                <Input style={{display : 'inline-block', width : '250px', marginLeft : '5px'}} id="Dadress" name="Dadress" value="ZEV0ZW6eSvSaYK8H92wAQg1" readOnly/>
                <Button style={{display : 'inline-block', marginLeft : '3px'}} type="default">복사하기</Button>
            </div>
            
            <P>※주의사항※<br/>반드시 입금 주소를 확인 후 전송하시기 바랍니다. 주소 혼동으로 인한 손실에 대해서는 책임 지지 않습니다.</P>

        </DivDeposit>
    );
}

export default Deposit;