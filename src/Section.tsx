import styled from "styled-components";
import img01 from './src_assets/01.jpg'
import img02 from './src_assets/02.jpg'

const StyledH3 = styled.h3 `
  color: black;
  font-size: 48px;
`;

const StyledPtag = styled.p `
  color: black;
  font-size: 24px;
`;

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  width: 100%;
  height: 800px;
  & > div {
    margin-top: 60px;
    margin-left: 40px;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;


function Section(){
    return (
    <>
        <StyledSection>
          <div>
            <img src={img01} width={640} alt="desc"/>
          </div>
          <div>
            <StyledH3>서비스 소개</StyledH3>
            <StyledPtag>
              AdsRider는 공유 자전거 광고 플랫폼입니다.
              AdsRider는 공유 자전거 광고 플랫폼입니다.
              AdsRider는 공유 자전거 광고 플랫폼입니다.
              AdsRider는 공유 자전거 광고 플랫폼입니다.
              AdsRider는 공유 자전거 광고 플랫폼입니다.
            </StyledPtag>
          </div>
        </StyledSection>


        <StyledSection>
          <div>
            <img src={img01} width={640} alt="desc"/>
          </div>
          <div>
            <StyledH3>코인 리워드 소개</StyledH3>
            <StyledPtag>AdsRider를 통해 공유 자전거를 사용하면 코인 리워드를 지급 받을 수 있습니다.</StyledPtag>
          </div>
        </StyledSection>


        <StyledSection>
          <div>
            <img src={img01} width={640} alt="desc"/>
          </div>
          <div>
            <StyledH3>광고 효과 소개</StyledH3>
            <StyledPtag>AdsRider는 기존의 자전거 광고 보다 광고 효과가 뛰어납니다.</StyledPtag>
          </div>
        </StyledSection>

        <StyledSection>
          <div>
            <img src={img01} width={640} alt="desc"/>
          </div>
          <div>
            <StyledH3>코인 거래 기능 소개</StyledH3>
            <StyledPtag>AdsRider는 코인 거래 기능을 제공합니다.</StyledPtag>
          </div>
        </StyledSection>
      </>
    );
}

export default Section;