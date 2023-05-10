import { Div, Text, CardDiv } from "./Styles";
import { Button, Card } from 'antd'
import img04 from '../src_assets/04.jpg'
import img05 from '../src_assets/05.jpg'
import img06 from '../src_assets/06.jpg'
import { useUserState } from "../context/user";

function Ticket(){

    const { Meta } = Card;
    const user = useUserState();
    const expireDate = dateConvert(new Date(user.expireDate))

    function dateConvert(date : Date){
      const Year = date.getFullYear()
      const Month = date.getMonth()
      const Day = date.getDate()
      const Date = Year  + '년 0' + Month + '월 ' + Day + '일';
      return(Date);
    }

    function ClickTicket(){
      return(
        <></>
      );
    }

    return(

      <Div>
        <CardDiv>
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
                cover={<img alt="60,000 krw" src={img06}/>}
              >
                <Meta title="60일 이용권" description="60일 동안 AdsRider 서비스를 이용할 수 있습니다. " />
          </Card>
        </CardDiv>
        {user.email? <Text>{user.email} 님 이용권 만료 기간: {expireDate}</Text> : '' }
      </Div>
    );
}

export default Ticket;