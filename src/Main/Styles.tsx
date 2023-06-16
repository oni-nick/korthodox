import { Card } from "antd";
import styled from "styled-components"


export const StyledHeader = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    /* 좌우길이 */
    padding: 0 40px;
    width: calc(100% - 40px * 2);
    /* 상단고정 */
    position: sticky;
    top: 100;
`;

export const StyledHeaderLogo = styled.div`
    font-size: 28px;
`;

export const StyledHeaderMenu = styled.ul`
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

export const Spacer = styled.div`
    flex: 1;
`;

export const Anchor = styled.a`
    text-decoration: none;
    color: black;
`;

export const StyledH3 = styled.h3 `
  color: black;
  font-size: 48px;
  margin: 0px;
`;



export const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  width: 100%;
  margin-bottom: 200px;
  /* height: 800px; */
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    margin-bottom: 0px;
  }
`;

export const StyledFooter = styled.div`
background-color: black;
color: white;
padding-left: 100px;
padding-top: 100px;
height: 200px;
`;

export const Div = styled.div`
  display : flex;
  align-items : center;
  flex-direction : column;
`
export const MypageDiv = styled.div`
  display : flex;
  align-items : center;
  flex-direction : column;
  margin : 70px
`
export const Text2 = styled.h3`
    font-size : 14px;
    font-weight : normal;
    display : inline;
    float : right;
    margin : 0px;
`

export const MainCard = styled(Card)`
  width : 500px;
  border-color: skyblue;
`

export const StyledPtag = styled.p `
  color: black;
  font-size: 18px;
  white-space: pre-line;
`;

export const StyledTitle = styled.h3 `
  color: black;
  font-size: 28px;
  margin: 0px;
`;

export const StyledDescDiv = styled.div`
  margin: 100px 250px 0px 30px;
  display : flex;
`;