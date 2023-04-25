import { useState } from "react";
import {Togglebtn, DWdiv, DWTable, Th, Td, P } from "./Styles"
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

// map 함수로 처리하기 위해  json 데이터 만들어봄. 
const DWHistory = {
    history : [
        {
            id : 1,
            date : '2023-03-12',
            amount : '3',
            isDW : 'Deposit',
        },
        {
            id : 2,
            date : '2023-03-26',
            amount : '1',
            isDW : 'Withdraw',
        },
        {
            id : 3,
            date : '2023-04-1',
            amount : '6',
            isDW : 'Deposit',
        }
    ]

}


function DWpage(){
    const [isDepoist, setDeposit] = useState(true);

    function toggleDeposit(){
        setDeposit(!isDepoist)
    }

    return(
    
    <>
        <DWdiv>
            <Togglebtn onClick={toggleDeposit}> 
                {isDepoist ? '입금' : '출금'}
            </Togglebtn>         
            <P> { isDepoist ? '입금' : '출금' } 페이지</P>
            {isDepoist
                ?
                <Deposit/>
                :
                <Withdraw/>
            }
            <h1 style={{ margin : '100px 0px 20px 0px'}}>입출금 이력 조회</h1>
            <DWTable>
                <tr>
                    <Th>날짜</Th>
                    <Th>금액</Th>
                    <Th>입/출금</Th>
                </tr>
                <tr>
                    <Td>2022-11-21</Td>
                    <Td>3 ADS</Td>
                    <Td>입금</Td>
                </tr>
                <tr>
                    <Td>2022-11-21</Td>
                    <Td>3 ADS</Td>
                    <Td>입금</Td>
                </tr>
                <tr>
                    <Td>2022-11-21</Td>
                    <Td>3 ADS</Td>
                    <Td>입금</Td>
                </tr>
            </DWTable>
        </DWdiv>
    </>
    );
}

export default DWpage;