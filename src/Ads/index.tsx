import { useState } from "react";
import {ToggleAdsBtn, AdsDiv, AdsTable, Th, Td} from "./Styles"
import CreateAds from "./CreateAds";
import { Switch, } from 'antd';

function Ads(){

    const [isAds, setAds] = useState(false);

    function ToggleAds(){
        setAds(!isAds);
    }

    return (
        <AdsDiv>
            <Switch style={{width : '100px'}} checkedChildren="입금" unCheckedChildren="출금" defaultChecked />
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