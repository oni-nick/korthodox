import { Div, Text, CardDiv, Card_Div } from "./Styles";
import { Button, Card } from 'antd'
import img04 from '../src_assets/01.jpg'
import img05 from '../src_assets/03.jpg'
import img06 from '../src_assets/01.jpg'
import { useUserState } from "../context/user";
import { Link } from "react-router-dom";

function Ticket(){

    const { Meta } = Card;
    const user = useUserState();
    const expireDate = dateConvert(new Date(user.expired_date))

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

      <Card_Div>
        <CardDiv>
          <Link to='/ticket/2000?price=2000&days=1'>
            <Card
                  hoverable
                  style={{ width: 360, marginRight : '50px' }}
                  cover={<img alt="2,000 ads" src={img04} style={ {width : '360px', height : '250px'} }/>}
                >
                    <Meta title="1일 이용권" description="1일 동안 AdsRider 서비스를 이용할 수 있습니다. " />
            </Card>
          </Link>
          <Link to='/ticket/7000?price=7000&days=30'>
            <Card
                  hoverable
                  style={{ width: 360, marginRight : '50px' }}
                  cover={<img alt="7,000 ads" src={img05} style={ {width : '360px', height : '250px'} }/>}
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
                  cover={<img alt="2,000 ads" src={img04} />}
                >
                    <Meta title="1일 이용권" description="1일 동안 AdsRider 서비스를 이용할 수 있습니다. " />
            </Card>
          </Link>
          <Link to='/ticket/7000?price=7000&days=30'>
            <Card
                  hoverable
                  style={{ width: 360, marginRight : '50px' }}
                  cover={<img alt="7,000 ads" src={img05} />}
                >
                  <Meta title="30일 이용권" description="한달 동안 AdsRider 서비스를 이용할 수 있습니다. " />
            </Card>
          </Link>
        </CardDiv>
      </Card_Div>
    );
}

export default Ticket;