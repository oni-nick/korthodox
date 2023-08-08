import { Card } from "antd";
import styled from "styled-components"

export const StyledSection = styled.section`
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  margin-bottom : 100px;
`;
export const StyledDescDiv = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : center;
`;
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
export const TextDiv = styled.div`
margin : 100px;
`
export const StyledHeaderMenu = styled.ul`
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    & > li {
        text-align: center;
        width: 160px;
        margin-right: 20px;
        flex: 1;
        font-size : 30px;
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
  margin: px;
`;

export const StyledFooter = styled.div`
background-color: #1ba5dc;
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
export const MainDiv = styled.div `
  display : flex;
  flex-direction : row;
  align-items : center;
  margin-top : 70px;
  margin-bottom : 60px;
`;

export const Card_Div = styled.div`
    display : flex;
    align-items : center;
    flex-direction : column;
    margin-top : 30px;
    margin-bottom : 100px;
`
export const CardDiv = styled.div`
    display : flex;
    justify-content : center;
    flex-direction : row;
    margin-bottom : 40px;
    padding-bottom : 25px;

`
export const Text = styled.h3`
    font-size : 22px;
    font-weight : normal;
    margin : 30px;
    float : center;
`
