import { StyledHeader, StyledHeaderLogo, StyledHeaderMenu, Spacer, Anchor } from "./Styles"

import kom from '../src_assets/kom-logo.png'


function Header(){

    return(
        <StyledHeader>
            <Anchor href="/">
                <img src={kom} alt='로고' width={400} height={100}/>
            </Anchor>
            <Spacer></Spacer>
            <StyledHeaderMenu>
                <li><Anchor href="/ticket"><p>뉴스</p></Anchor></li>
                <li><Anchor href="/coin"><p>동방정교회</p></Anchor></li>
                <li><Anchor href="/ads"><p>문서</p></Anchor></li>
                <li><Anchor href="/dw"><p>영성</p></Anchor></li>
                <li><Anchor href="/dw"><p>역사</p></Anchor></li>
            </StyledHeaderMenu>
            <Spacer></Spacer>

        </StyledHeader>
  );
}
export default Header;