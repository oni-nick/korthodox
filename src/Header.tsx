import './Header.css';
import styled from 'styled-components';

const StyledHeader = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding : 8px 50px;
`
const StyledHeaderLogo = styled.div`
    font-size: 28px;
`
const StyledHeaderMenu = styled.ul`
    display:flex;
    list-style: none;
    padding-left: 0;
    & > li {
        padding : 8px 50px;
        font-size : 20px; 
    }
    & > li:hover{
        background-color: #efe93b;
        border-radius: 12px;
    }
`

function Header(){
    return(
        <StyledHeader>          
            <StyledHeaderLogo>
                <a href="">AdsRider</a>
            </StyledHeaderLogo>
            <StyledHeaderMenu>
                <li><a href="">이용권 구매</a></li>
                <li><a href="">코인 거래</a></li>
                <li><a href="">광고 등록</a></li>
                <li><a href="">입출금</a></li>
            </StyledHeaderMenu>
            <div className="Header_login"> 
                <a href="">로그인</a> 
            </div>  
            <div className="Header_logout">
                <a href="">로그아웃</a>
                <a href="">마이페이지</a>
            </div>
        </StyledHeader>
  );
}
export default Header;