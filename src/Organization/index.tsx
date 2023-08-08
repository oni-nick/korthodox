import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { Link } from 'react-router-dom';
import styled from "styled-components"
import org01 from '../src_assets/org01.jpg'
import org02 from '../src_assets/org02.jpg'

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
function Organization(){
    return(
        <Card_Div>
            <CardDiv>
              <Link to='/docs/ukase'>
                <Card
                      hoverable
                      style={{ width: 360, marginRight : '50px' }}

                      cover={
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img alt="2,000 ads" src={org01} style={ {width : '300px', height : '368px'} }/>
                        </div>}
                    >
                        <Meta title="니콜라스 수좌대주교" description="해외러시아정교회 수좌대주교 " />
                </Card>
              </Link>
              <Link to='/docs'>
                <Card
                      hoverable
                      style={{ width: 360, marginRight : '50px' }}
                      cover={<div style={{ display: 'flex', justifyContent: 'center' }}>
                      <img alt="2,000 ads" src={org02} style={ {width : '300px', height : '368px'} }/>
                     </div>}
                    >
                      <Meta title="루카 주교" description="조단빌 수도원/신학원 원장 " />
                </Card>
              </Link>
            </CardDiv>
          </Card_Div>
    );
}

export default Organization;