import { useState } from "react";
import styled from "styled-components";
import CreateAds from "./CreateAds";

const ToggleAdsBtn = styled.button`
    margin : 20px 20px 20px 20px;
    width: 200px;
    height : 60px;
    background: gold;
    border-radius: 60px;
    border : none;
    font-size: 24px;
`
const AdsDiv = styled.div`
    display: flex;
    flex-direction : column;
    align-items: center;
`
const AdsTable = styled.table`
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
    padding : 40px;
`

function Ads(){

    const [isAds, setAds] = useState(false);

    function ToggleAds(){
        setAds(!isAds);
    }

    return (
        <AdsDiv>
            <ToggleAdsBtn onClick={ToggleAds}>{!isAds ? '광고 등록' : '돌아가기'}</ToggleAdsBtn>

            {
                isAds 
                ? <CreateAds/>
                : <>
                    <h1 style={{marginTop: '50px'}}>
                        광고 이력 조회
                    </h1>
                    
                    <AdsTable>
                        <tr>
                            <Th>광고 번호</Th>
                            <Th>광고 이름</Th>
                            <Th>총 보상</Th>
                            <Th>광고 기간</Th>
                        </tr>
                        <tr>
                            <Td>0001</Td>
                            <Td>인체공학 마우스</Td>
                            <Td>3 ADS</Td>
                            <Td>2023.03.12 ~ 2023.03.20</Td>
                        </tr>
                        <tr>
                            <Td>0001</Td>
                            <Td>인체공학 마우스</Td>
                            <Td>3 ADS</Td>
                            <Td>2023.03.12 ~ 2023.03.20</Td>
                        </tr>
                        <tr>
                            <Td>0001</Td>
                            <Td>인체공학 마우스</Td>
                            <Td>3 ADS</Td>
                            <Td>2023.03.12 ~ 2023.03.20</Td>
                        </tr>
                    </AdsTable>
                </>
            }
            
        </AdsDiv>
    );
}

export default Ads;