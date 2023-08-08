
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta';
import { Link } from 'react-router-dom';
import news01 from '../src_assets/news01.jpg'
import news02 from '../src_assets/news02.jpg'
import news03 from '../src_assets/news03.jpg'
import news04 from '../src_assets/news04.jpg'
import Cards from '../Cards'
import styled from "styled-components"

const Card_Div = styled.div`
    display : flex;
    align-items : center;
    flex-direction : column;
    margin-top : 30px;
    margin-bottom : 100px;
`
const CardDiv = styled.div`
    display : flex;
    justify-content : center;
    flex-direction : row;
    margin-bottom : 40px;
    padding-bottom : 25px;

`
function News(){
    return(
        <Card_Div>
            <CardDiv>
              <Link to='/news'>
                <Card
                      hoverable
                      style={{ width: 360, marginRight : '50px' }}
                      cover={<img alt="2,000 ads" src={news01} style={ {width : '360px', height : '250px'} }/>}
                    >
                        <Meta title="2023.3, 조단빌 방문" description="세르기님, 수련수사로 루카 주교님의 축복을 받음. " />
                </Card>
              </Link>
              <Link to='/news'>
                <Card
                      hoverable
                      style={{ width: 360, marginRight : '50px' }}
                      cover={<img alt="7,000 ads" src={news02} style={ {width : '360px', height : '250px'} }/>}
                    >
                      <Meta title="2023.3 조단빌" description="한국선교부 현황 보고. " />
                </Card>
              </Link>
            </CardDiv>
            <CardDiv>
              <Link to='/news'>
                <Card
                      hoverable
                      style={{ width: 360, marginRight : '50px' }}
                      cover={<img alt="2,000 ads" src={news03} style={ {width : '360px', height : '250px'} }/>}
                    >
                        <Meta title="2023.5 성요한 성당 재개" description="5.21 성 요한 신학자 축일 성찬예배 거행. " />
                </Card>
              </Link>
              <Link to='/news'>
                <Card
                      hoverable
                      style={{ width: 360, marginRight : '50px' }}
                      cover={<img alt="7,000 ads" src={news04} style={ {width : '360px', height : '250px'} }/>}
                    >
                      <Meta title="2023.6 세례 성사" description="2023.6 세라핌 (오른쪽에서 두번째). " />
                </Card>
              </Link>
            </CardDiv>
          </Card_Div>
    );
}

export default News;