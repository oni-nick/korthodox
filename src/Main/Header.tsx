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
                <li><Anchor href="/org"><p>조직</p></Anchor></li>
                <li><Anchor href="/news"><p>뉴스</p></Anchor></li>
                <li><Anchor href="/docs"><p>문서</p></Anchor></li>
                <li><Anchor href="https://web.archive.org/web/20080820091437/http://www.korthodox.org/index.html" target="_blank"><p>아카이브</p></Anchor></li>
            </StyledHeaderMenu>
            <Spacer></Spacer>

        </StyledHeader>
  );
}
export default Header;