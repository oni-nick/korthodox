import img01 from '../src_assets/01.jpg'
import img02 from '../src_assets/05.jpg'
import img03 from '../src_assets/03.jpg'
import img04 from '../src_assets/04.jpg'
import map from '../src_assets/map.jpg'
import {StyledH3, StyledPtag, StyledSection, StyledDescDiv, MainDiv} from "./Styles"
import styled from "styled-components"
import { CardDiv, Card_Div } from "./Styles";
import { Link } from "react-router-dom";
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta';
import { Avatar, List } from 'antd';

type DescriptionType = {
  key : number;
  image: string;
  title: string;
  description: string;
};

function Section(){
    return (
    <>
        <StyledSection>
          <StyledDescDiv>
            <MainDiv>
              <div>
                <img src={img02} width={900} alt="desc"/>
              </div>
              <div>
                <img src={img04} width={900} alt="desc"/>
              </div>
            </MainDiv>
            <Div2>
              <ol>
              <Head>8.13 오순절 후 10번째 <Red>주일</Red></Head>
              <Desc>09:30 3,6시과; 10:00 성찬예배</Desc><br/>
              <Head>8.19 주변모 축일<Blue> 토요일</Blue></Head>
              <Desc>09:30 3,6시과; 10:00 성찬예배</Desc><br/>
              <Head>8.20 오순절 후 11번째 <Red>주일</Red></Head>
              <Desc>09:30 3,6시과; 10:00 성찬예배</Desc><br/>
              <Head>8.27 오순절 후 12번째 <Red>주일</Red></Head>
              <Desc>09:30 3,6시과; 10:00 성찬예배</Desc><br/>
              <Head>8.28 성모 안식 축일 <Blue>월요일</Blue></Head>
              <Desc>09:30 3,6시과; 10:00 성찬예배</Desc><br/>
              </ol>
            </Div2>
            <MapDiv>
                <img src={map} width={400} alt="desc"/>
            </MapDiv>
          </StyledDescDiv>
        </StyledSection>
      </>
    )
}

const Div2 = styled.div`
    text-align : center;
    font-size : 25px;
`;
const MapDiv = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
`;
const Title = styled.h1`
  font-size : 32px;
  margin-bottom : 20px;
`
const Head = styled.p`
    text-align : center;
    margin : 0px;
`;

const Desc = styled.p`
    text-align : center;
    margin : 0px;
    font-size : 20px;
    color : gray;
`;
const Red = styled.text`
  color : red;
`
const Blue = styled.text`
  color : blue;
`


export default Section;