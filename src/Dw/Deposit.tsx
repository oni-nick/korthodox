import {P, P2, DivDeposit} from "./Styles"
import { Button, Checkbox, Form, Input } from 'antd';

function Deposit(){

    return (
        <DivDeposit>
            <P2>입금 주소  :  ZEV0ZW6eSvSaYK8H92wAQg1</P2> <br/>           
            <P>※주의사항※<br/>반드시 입금 주소를 확인 후 전송하시기 바랍니다. 주소 혼동으로 인한 손실에 대해서는 책임 지지 않습니다.</P>

        </DivDeposit>
    );
}

export default Deposit;