import { useState } from "react";
import styled from 'styled-components'
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

const Togglebtn = styled.button`
    margin : 20px 20px 20px 20px;
    width: 200px;
    height : 60px;
    background: gold;
    border-radius: 60px;
    border : none;
    font-size: 24px;
`

const DWdiv = styled.div`
    display : flex;
    align-items : center;
    flex-direction : column;

`
const DWTable = styled.table`
    margin : 50px;
    border : 1px solid black;
    width : 50%;
    border-collapse : collapse;
    border-spacing : 20px 30px;
`
const Th = styled.th`
    border : 1px solid black;
    background-color : gold;
    padding : 10px;
`
const Td = styled.td`
    border : 1px solid black;
    text-align : center;
    padding : 20px;
`
const Tr = styled.tr`

`
const P = styled.p`
    margin : 30px 20px 50px 20px;
    font-size : 40px;
`
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