import styled from "styled-components";
import img01 from './src_assets/01.jpg'
import img02 from './src_assets/02.jpg'

type DescriptionType = {
  image: string;
  title: string;
  description: string;
};

const StyledH3 = styled.h3 `
  color: black;
  font-size: 48px;
  margin: 0px;
`;

const StyledPtag = styled.p `
  color: black;
  font-size: 24px;
  white-space: pre-line;
`;

const StyledSection = styled.section`
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

const StyledDescDiv = styled.div`
  margin: 0px 30px 100px 30px;
`;

const descriptions: DescriptionType[] = [
  {
    image: img01,
    title: '서비스 소개',
    description: '\n\
      AdsRider는 공유 자전거 광고 플랫폼입니다.\n\
      AdsRider는 공유 자전거 광고 플랫폼입니다.\n\
      AdsRider는 공유 자전거 광고 플랫폼입니다.\n\
      AdsRider는 공유 자전거 광고 플랫폼입니다.\n\
      AdsRider는 공유 자전거 광고 플랫폼입니다.\n\
    ',
  },
  {
    image: img01,
    title: '코인 리워드 소개',
    description: 'AdsRider를 통해 공유 자전거를 사용하면 코인 리워드를 지급 받을 수 있습니다',
  },
  {
    image: img01,
    title: '광고 효과 소개',
    description: 'AdsRider는 기존의 자전거 광고 보다 광고 효과가 뛰어납니다.',
  },
  {
    image: img01,
    title: '코인 거래 기능 소개',
    description: 'AdsRider는 코인 거래 기능을 제공합니다.',
  },
];

function Section(){
    return (
    <>
      {
        descriptions.map(d => (
          <StyledSection>
          <div>
            <img src={d.image} width={640} alt="desc"/>
          </div>
          <StyledDescDiv>
            <StyledH3>{d.title}</StyledH3>
            <StyledPtag>
              {d.description} 
            </StyledPtag>
          </StyledDescDiv>
        </StyledSection>
        ))
      }
        {/* <StyledSection>
          <div>
            <img src={img01} width={640} alt="desc"/>
          </div>
          <StyledDescDiv>
            <StyledH3>서비스 소개</StyledH3>
            <StyledPtag>
              AdsRider는 공유 자전거 광고 플랫폼입니다.
              AdsRider는 공유 자전거 광고 플랫폼입니다.
              AdsRider는 공유 자전거 광고 플랫폼입니다.
              AdsRider는 공유 자전거 광고 플랫폼입니다.
              AdsRider는 공유 자전거 광고 플랫폼입니다.
            </StyledPtag>
          </StyledDescDiv>
        </StyledSection>

        <StyledSection>
          <div>
            <img src={img01} width={640} alt="desc"/>
          </div>
          <StyledDescDiv>
            <StyledH3>코인 리워드 소개</StyledH3>
            <StyledPtag>AdsRider를 통해 공유 자전거를 사용하면 코인 리워드를 지급 받을 수 있습니다.</StyledPtag>
          </StyledDescDiv>
        </StyledSection>


        <StyledSection>
          <div>
            <img src={img01} width={640} alt="desc"/>
          </div>
          <StyledDescDiv>
            <StyledH3>광고 효과 소개</StyledH3>
            <StyledPtag>AdsRider는 기존의 자전거 광고 보다 광고 효과가 뛰어납니다.</StyledPtag>
          </StyledDescDiv>
        </StyledSection>

        <StyledSection>
          <div>
            <img src={img01} width={640} alt="desc"/>
          </div>
          <StyledDescDiv>
            <StyledH3>코인 거래 기능 소개</StyledH3>
            <StyledPtag>AdsRider는 코인 거래 기능을 제공합니다.</StyledPtag>
          </StyledDescDiv>
        </StyledSection> */}
      </>
    );
}

export default Section;