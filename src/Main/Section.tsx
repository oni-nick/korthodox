import img01 from '../src_assets/01.jpg'
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
    description: 'AdsRider는 서비스는 암호화폐 리워드를 지급하는 자전거 광고 플랫폼입니다.\n\
      광고를 탑승한 자전거 라이더들은 광고주로부터 암호화폐로 보상을 받을 수 있습니다.\n\
    ',
  },
  {
    key : 2,
    image: img01,
    title: '코인 리워드',
    description: 'AdsRider는 암호화페 리워드를 지급 합니다.\n\
      시용자들은 자전거를 이용하면서 광고를 보고 리워드를 얻을 수 있습니다.\n\
      즐거운 라이딩과 함께 암호화폐로 보상을 받아보세요.\n\
      '
      ,
  },
  {
    key : 3,
    image: img01,
    title: '광고 효과',
    description: '광고주들은 자전거를 통해 다양한 사람들에게 광고를 전달할 수 있습니다.\n\
      또한 블록체인을 통해 광고 내역이 투명하게 관리됩니다.\n\
      효과적인 광고 타겟팅과 투명한 광고 내역을 통해 광고 효과를 극대화하세요!\n\
      ',
  },
  {
    key : 4,
    image: img01,
    title: '코인 구매 기능',
    description: 'ADS 코인을 구매하고 원하는 만큼 서비스를 이용하세요!\n\
    자전거 사용 리워드로 받은 ADS 코인을 플랫폼 내에서 거래할 수도 있습니다.\n\
    ',
  },
];
export default Section;