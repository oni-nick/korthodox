import { Div, Text, CardDiv } from "./Styles";
import { Button, Card } from 'antd'
import img04 from '../src_assets/04.jpg'
import img05 from '../src_assets/05.jpg'
import img06 from '../src_assets/06.jpg'
import { useUserState } from "../context/user";
import { Link } from "react-router-dom";

function Ticket(){

    const { Meta } = Card;
    const user = useUserState();
    const expireDate = dateConvert(new Date(user.expireDate))

    function dateConvert(date : Date){
      const Year = date.getFullYear()
      const Month = date.getMonth()+1
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
        {user.email? <Text>{user.email}님의 이용권은 {expireDate}까지 입니다.</Text> : '' }
        <CardDiv>
          <Link to='/ticket/2000?price=2000&days=10'>
            <Card
                  hoverable
                  style={{ width: 360, marginRight : '50px' }}
                  cover={<img alt="2,000 krw" src={img04} />}
                >
                    <Meta title="10일 이용권" description="10일 동안 AdsRider 서비스를 이용할 수 있습니다. " />
            </Card>
          </Link>
          <Link to='/ticket/7000?price=7000&days=40'>
            <Card
                  hoverable
                  style={{ width: 360, marginRight : '50px' }}
                  cover={<img alt="7,000 krw" src={img05} />}
                >
                  <Meta title="40일 이용권" description="40일 동안 AdsRider 서비스를 이용할 수 있습니다. " />
            </Card>
          </Link>
          <Link to='/ticket/30000?price=30000&days=200'>
            <Card
                  hoverable
                  style={{ width: 360, marginRight : '50px' }}
                  cover={<img alt="30,000 krw" src={img06}/>}
                >
                  <Meta title="200일 이용권" description="200일 동안 AdsRider 서비스를 이용할 수 있습니다. " />
            </Card>
          </Link>
        </CardDiv>
      </Div>
    );
}

export default Ticket;