import { useState } from "react";
import { Button, Radio } from 'antd';
import CreateAds from "./CreateAds";
import AdsTable from "./AdsTable";
import { AdsDiv } from "./Styles"
import { Link } from "react-router-dom";
function Ads(){

    return (
        <AdsDiv>
            <AdsTable/>            
            
            <Link to="/ads/write"><Button type="primary" style={{marginBottom : 70, marginLeft : 380, marginTop : 10}}>광고 등록</Button></Link>
        </AdsDiv>
    );
}

export default Ads;