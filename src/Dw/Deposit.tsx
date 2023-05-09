import { useEffect, useState } from "react";
import {P, P3, P4, DivDeposit} from "./Styles"
import { Button, Input, QRCode } from 'antd';
import { UserInfo, useUserDispatch, useUserState } from "../context/user";
import axios from "axios";

function Deposit(){

    
    const user = useUserState();
    

    return (
        <DivDeposit>
            <div>
                <P4>입금주소</P4>
                <Input style={{display : 'inline-block', width : '350px', marginLeft : '5px'}} id="Dadress" name="Dadress" value={user.address} readOnly/>
                <Button onClick={() => {navigator.clipboard.writeText(user.address); alert("복사되었습니다.")}} style={{display : 'inline-block', marginLeft : '3px'}} type="default">복사하기</Button>
            </div>
            
            <P>※주의사항※<br/>반드시 입금 주소를 확인 후 전송하시기 바랍니다. 주소 혼동으로 인한 손실에 대해서는 책임 지지 않습니다.</P>
            <P3>QR 코드</P3>
            <QRCode value={user.address}/>
        </DivDeposit>
    );
}

export default Deposit;