import img01 from '../src_assets/01.jpg'
import {StyledH3, StyledPtag, StyledSection, StyledDescDiv} from "./Styles"

type DescriptionType = {
  image: string;
  title: string;
  description: string;
};

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
      </>
    );
}

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
export default Section;