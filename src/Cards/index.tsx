
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { Link } from 'react-router-dom';
import Docs01 from '../src_assets/Docs01.jpg'
import Docs02 from '../src_assets/Docs02.jpg'
import Docs03 from '../src_assets/Docs03.jpg'
import Docs04 from '../src_assets/Docs04.jpg'
import styled from "styled-components"
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
function Cards(){

    return(
        <Card_Div>
            <CardDiv>
              <Link to='/docs/ukase'>
                <Card
                      hoverable
                      style={{ width: 360, marginRight : '50px' }}
                      cover={<div style={{ display: 'flex', justifyContent: 'center' }}>
                      <img alt="2,000 ads" src={Docs01} style={ {width : '300px', height : '368px'} }/>
                      </div>}
                    >
                        <Meta title="사령장" description="2023.5 주교시노드, 한국선교부와 성 니콜라이 재단설립 축복. " />
                </Card>
              </Link>
              <Link to='/docs/resol'>
                <Card
                      hoverable
                      style={{ width: 360, marginRight : '50px' }}
                      cover={<div style={{ display: 'flex', justifyContent: 'center' }}>
                      <img alt="2,000 ads" src={Docs04} style={ {width : '300px', height : '368px'} }/>
                      </div>}
                    >
                      <Meta title="결의문" description="힐라리온 수좌, 성 니콜라이 재단 설립 축복(2003). " />
                </Card>
              </Link>
            </CardDiv>
            <CardDiv>
              <Link to='/docs'>
                <Card
                      hoverable
                      style={{ width: 360, marginRight : '50px' }}
                      cover={<div style={{ display: 'flex', justifyContent: 'center' }}>
                      <img alt="2,000 ads" src={Docs03} style={ {width : '300px', height : '368px'} }/>
                      </div>}
                    >
                        <Meta title="자유와 책임" description="키릴 총대주교 저(2016). " />
                </Card>
              </Link>
              <Link to='/docs'>
                <Card
                      hoverable
                      style={{ width: 360, marginRight : '50px' }}
                      cover={<img alt="7,000 ads" src={Docs02} style={ {width : '340px', height : '368px'} }/>}
                    >

                      <Meta title="논문" description="한국에서의 러시아정교회 선교(2017). " />
                      <div>
              </div>
              </Card>
              </Link>
            </CardDiv>
            <a href={require('../src_assets/paper.pdf')} target="_blank" rel="noopener noreferrer" style={{paddingLeft : '400px'}}>
                        <br/> PDF 보기
                      </a>
            </Card_Div>
    );
}

export default Cards;