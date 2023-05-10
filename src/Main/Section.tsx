import img01 from '../src_assets/01.jpg'
import img03 from '../src_assets/03.jpg'
import {StyledH3, StyledPtag, StyledSection, StyledDescDiv} from "./Styles"

type DescriptionType = {
  key : number;
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
    key : 1,
    image: img01,
    title: '서비스 소개',
    description: '\n\
      AdsRider는 암호화폐 리워드를 이용하는 자전거 광고 플랫폼입니다.\n\
    ',
  },
  {
    key : 2,
    image: img01,
    title: '코인 리워드',
    description: '\n\
      AdsRider는 암호화페 리워드를 지급 합니다\n\
      '
      ,
  },
  {
    key : 3,
    image: img01,
    title: '광고 효과',
    description: '\n\
      AdsRider는 기존의 자전거 광고 보다 광고 효과가 뛰어납니다.\n\
      또한 블록체인을 통해 광고 내역이 투명하게 관리됩니다.',
  },
  {
    key : 4,
    image: img01,
    title: '코인 거래 기능',
    description: 'AdsRider는 코인 거래 기능을 제공합니다.',
  },
];
export default Section;