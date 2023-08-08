import img04 from '../src_assets/04.jpg'
import img02 from '../src_assets/05.jpg'
import img01 from '../src_assets/01.jpg'
import img03 from '../src_assets/03.jpg'
import {StyledH3, StyledPtag, StyledSection, StyledDescDiv, MainDiv, TextDiv} from "./Styles"
import { CardDiv, Card_Div } from "./Styles";
import { Link } from "react-router-dom";
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta';

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
          </StyledDescDiv>
          <Card_Div>
            <CardDiv>
              <Link to='/ticket/2000?price=2000&days=1'>
                <Card
                      hoverable
                      style={{ width: 360, marginRight : '50px' }}
                      cover={<img alt="2,000 ads" src={img01} style={ {width : '360px', height : '250px'} }/>}
                    >
                        <Meta title="1일 이용권" description="1일 동안 AdsRider 서비스를 이용할 수 있습니다. " />
                </Card>
              </Link>
              <Link to='/ticket/7000?price=7000&days=30'>
                <Card
                      hoverable
                      style={{ width: 360, marginRight : '50px' }}
                      cover={<img alt="7,000 ads" src={img03} style={ {width : '360px', height : '250px'} }/>}
                    >
                      <Meta title="30일 이용권" description="한달 동안 AdsRider 서비스를 이용할 수 있습니다. " />
                </Card>
              </Link>
            </CardDiv>
            <CardDiv>
              <Link to='/ticket/2000?price=2000&days=1'>
                <Card
                      hoverable
                      style={{ width: 360, marginRight : '50px' }}
                      cover={<img alt="2,000 ads" src={img01} style={ {width : '360px', height : '250px'} }/>}
                    >
                        <Meta title="1일 이용권" description="1일 동안 AdsRider 서비스를 이용할 수 있습니다. " />
                </Card>
              </Link>
              <Link to='/ticket/7000?price=7000&days=30'>
                <Card
                      hoverable
                      style={{ width: 360, marginRight : '50px' }}
                      cover={<img alt="7,000 ads" src={img01} style={ {width : '360px', height : '250px'} }/>}
                    >
                      <Meta title="30일 이용권" description="한달 동안 AdsRider 서비스를 이용할 수 있습니다. " />
                </Card>
              </Link>
            </CardDiv>
          </Card_Div>
        </StyledSection>
      </>
    )
}
export default Section;