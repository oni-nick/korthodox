import { Div } from "./Styles";
import { Card, Button } from 'antd'
import img04 from '../src_assets/04.jpg'
import img05 from '../src_assets/05.jpg'
import img06 from '../src_assets/06.jpg'

function Ticket(){
    
    const { Meta } = Card;

    return(
        <Div>
        <Card
              hoverable
              style={{ width: 360, marginRight : '50px' }}
              cover={<img alt="10,000 krw" src={img04} />}
            >   
                <Meta title="10일 이용권" description="10일 동안 AdsRider 서비스를 이용할 수 있습니다. " />
        </Card>
        <Card
              hoverable
              style={{ width: 360, marginRight : '50px' }}
              cover={<img alt="30,000 krw" src={img05} />}
            >
              <Meta title="30일 이용권" description="30일 동안 AdsRider 서비스를 이용할 수 있습니다. " />
        </Card>
        <Card
              hoverable
              style={{ width: 360, marginRight : '50px' }}
              cover={<img alt="50,000 krw" src={img06}/>}
            >
              <Meta title="60일 이용권" description="50일 동안 AdsRider 서비스를 이용할 수 있습니다. " />
        </Card>
        </Div>
    );
}

export default Ticket;