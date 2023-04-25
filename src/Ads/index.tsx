import { useState } from "react";
import { Radio } from 'antd';
import CreateAds from "./CreateAds";
import AdsTable from "./AdsTable";
import { AdsDiv } from "./Styles"
function Ads(){

    const [isPage, setPage] = useState(true);
    
    const radioChanged = (e : any) => {
        console.log(e.value);
        console.log(isPage);
        // value 어떻게 주고 받는지 모르겟음. 일단 bool 타입으로 구현.
        setPage(!isPage)
    }

    return (
        <AdsDiv>
             <Radio.Group onChange={radioChanged} defaultValue="a" size="large">
                <Radio.Button value="a" >광고 등록</Radio.Button>
                <Radio.Button value="b">광고 내역</Radio.Button>
            </Radio.Group>

            {
                isPage 
                ? <CreateAds/>
                : <AdsTable/>
            }
            
        </AdsDiv>
    );
}

export default Ads;