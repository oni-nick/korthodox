import { Button, Radio } from 'antd';
import AdsTable from "./AdsTable";
import { AdsDiv } from "./Styles"
import { Link } from "react-router-dom";
import { useUserState } from '../context/user';

function Ads(){

    const user = useUserState();

    return (
        <AdsDiv>
            <AdsTable/>
            {
            user.email
            ? <Link to="/ads/write"><Button type="primary" style={{marginBottom : 70, marginLeft : 380, marginTop : 10}}>광고 등록</Button></Link>
            : <p>로그인 후에 광고 등록이 가능합니다. </p>
            } 
        </AdsDiv>
    );
}

export default Ads;