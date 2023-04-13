import './Header.css';
import styled from 'styled-components';

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
        background-color: #efe93b;
        border-radius: 12px;
    }
`;

const Spacer = styled.div`
    flex: 1;
`;

const isLogined = false;

function Header(){
    return(
        <StyledHeader>
            <StyledHeaderLogo>
                <a href="#">AdsRider</a>
            </StyledHeaderLogo>
            <Spacer></Spacer>
            <StyledHeaderMenu>
                <li><a href="#"><p>이용권 구매</p></a></li>
                <li><a href="#"><p>코인 거래</p></a></li>
                <li><a href="#"><p>광고 등록</p></a></li>
                <li><a href="#"><p>입출금</p></a></li>
            </StyledHeaderMenu>
            <Spacer></Spacer>
            {
                !isLogined
                    ?   <div>
                            <a href="#"><p>로그인</p></a>
                        </div>
                    :   <div>
                            <a href="#"><p>로그아웃</p></a>
                            <a href="#"><p>마이페이지</p></a>
                        </div>
            }
        </StyledHeader>
  );
}
export default Header;