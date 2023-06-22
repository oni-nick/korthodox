import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import { StyledHeader, StyledHeaderLogo, StyledHeaderMenu, Spacer, Anchor } from "./Styles"
import { useUserDispatch, useUserState } from '../context/user';
import adsrider from '../src_assets/adsrider.png'
import { useNavigate } from "react-router-dom";

function Header(){
    const user = useUserState();
    const dispatch = useUserDispatch();
    const navigate = useNavigate();

    const doLogOut = () => {
        dispatch({ type: 'LOG_OUT' });
        axios.get('/api/user/logout');
        navigate("/");
    };

    return(
        <StyledHeader>
            <img src={adsrider} alt='로고' width={100} height={100}/>
            <StyledHeaderLogo>
                <Anchor href="/">AdsRider</Anchor>
            </StyledHeaderLogo>
            <Spacer></Spacer>
            <StyledHeaderMenu>
                <li><Anchor href="/ticket"><p>이용권 구매</p></Anchor></li>
                <li><Anchor href="/coin"><p>코인 구매</p></Anchor></li>
                <li><Anchor href="/ads"><p>광고 등록</p></Anchor></li>
                <li><Anchor href="/dw"><p>입출금</p></Anchor></li>
            </StyledHeaderMenu>
            <Spacer></Spacer>
            <StyledHeaderMenu>
                {user.email + ' ' + user.level + '님'}
                {
                    !user.email
                        ?   <li>
                                <Anchor href="/login"><p><UserOutlined />로그인</p></Anchor>
                            </li>
                        :   <>
                                <div style={{marginRight : '30px'}}>
                                    <></>
                                </div>
                                <li><Anchor onClick={doLogOut}><p>로그아웃</p></Anchor></li>
                                <li><Anchor href="/mypage"><p>마이페이지</p></Anchor></li>
                            </>
                }
            </StyledHeaderMenu>
        </StyledHeader>
  );
}
export default Header;