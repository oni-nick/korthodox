import { useState } from "react";
import { DWdiv, P_Alert } from "./Styles"
import Deposit from "./Deposit";
import DwTable from "./DwTable";
import Withdraw from "./Withdraw";
import { Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { useUserState } from "../context/user";


function DWpage(){
    const [isDepoist, setDeposit] = useState('a');
    const user = useUserState();

    function toggleDeposit(e: RadioChangeEvent){
        switch(e.target.value){
            case 'a': 
                setDeposit('a');
                break;
            case 'b':
                setDeposit('b');
                break;
            case 'c':
                setDeposit('c');
                break;
            }
        }
    function returnDeposit(){
        switch(isDepoist){
            case 'a': 
                return <Deposit/>
                break;
            case 'b':
                return <Withdraw/>
                break;
            case 'c':
                return <DwTable/>
                break;
            }
    }
    
    return(
    <>  {user.email 
        ? 
        <DWdiv>
            <Radio.Group onChange={toggleDeposit} defaultValue="a" size="large">
                <Radio.Button value="a">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;입금&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Radio.Button>
                <Radio.Button value="b">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;출금&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Radio.Button>
                <Radio.Button value="c">입출금 내역</Radio.Button>
            </Radio.Group>
            {returnDeposit()}
        </DWdiv>
        : 
        <DWdiv>
            <P_Alert>로그인이 필요한 페이지입니다.<br/><br/> 로그인을 해주세요.</P_Alert>
        </DWdiv>
            
        }
        
        
    </>
    );
}

export default DWpage;