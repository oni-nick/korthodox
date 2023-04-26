import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import adsrider from '../src_assets/adsrider.png'

const StyledHeader = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    /* 좌우길이 */
    padding: 0 40px;
    width: calc(100% - 40px * 2);
    /* 상단고정 */
    position: sticky;
    top: 0;
`;

const StyledHeaderLogo = styled.div`
    font-size: 28px;
`;

const StyledHeaderMenu = styled.ul`
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    & > li {
        text-align: center;
        width: 120px;
        margin-right: 20px;
        flex: 1;
        font-size : 20px;
    }
    & > li:hover{
        opacity : 0.7;
        border-radius: 12px;
        text-decoration : underline;
        color :#a6cef4;
        background-color : #a6cef4;
    }
`;

const Spacer = styled.div`
    flex: 1;
`;

const Anchor = styled.a`
    text-decoration: none;
    color: black;
`;

const isLogined = false;

function Header(){
    return(
        <StyledHeader>
            <img src={adsrider} alt='로고' width={100} height={100}/>
            <StyledHeaderLogo>
                <Anchor href="/">AdsRider</Anchor>
            </StyledHeaderLogo>
            <Spacer></Spacer>
            <StyledHeaderMenu>
                <li><Anchor href="#"><p>이용권 구매</p></Anchor></li>
                <li><Anchor href="#"><p>코인 거래</p></Anchor></li>
                <li><Anchor href="/ads"><p>광고 기능</p></Anchor></li>
                <li><Anchor href="/dw"><p>입출금</p></Anchor></li>
            </StyledHeaderMenu>
            <Spacer></Spacer>
            {
                !isLogined
                    ?   <div>
                            <Anchor href="/login"><p><UserOutlined />로그인</p></Anchor>
                        </div>
                    :   <div>
                            <Anchor href="#"><p>로그아웃</p></Anchor>
                            <Anchor href="#"><p>마이페이지</p></Anchor>
                        </div>
            }
        </StyledHeader>
  );
}
export default Header;