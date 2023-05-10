import { Card } from 'antd';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { DetailDiv, Text } from "./Styles";

interface Ads {
    id: number;
    title: string;
    subtitle: string;
    image_id: number;
    reward: number;
    start_date: Date;
    end_date: Date;
    // user_email: string;
  }

function Detail(){
    const [ads, setAds] = useState<Ads | null>(null);
    let { index }  = useParams();

    //{ads == null ? '' : ads.start_date} 밀리초 변환 잘 안됨

    function RenderAds(){
      if (ads == null){
        return(<></>)
      }
      const nImageId = ads.image_id
      const nTitle = ads.title
      const nSubtitle = ads.subtitle
      const nReward = ads.reward
      const nStartDate = dateConvert(new Date(ads.start_date))
      const nEndDate = dateConvert(new Date(ads.end_date))

      function dateConvert(date : Date){
        const Year = date.getFullYear()
        const Month = date.getMonth()+1
        const Day = date.getDate()
        const Date = Year  + '년 0' + Month + '월 ' + Day + '일';
        return(Date);
      }

      return(
        <Card hoverable style={{ width: 800, marginRight : '50px', marginBottom : '100px' }} cover={<img alt="광고 이미지" src={'/api/image/' + nImageId} />}>
          <h1>{ nTitle }</h1>
          <Text>{'광고 제목 : ' + nTitle}</Text>
          <Text>{'광고 내용 : ' + nSubtitle}</Text>
          <Text>{'광고 리워드 : ' + nReward + ' ADS'}</Text>
          <Text>{'광고 시작 날짜 : ' + nStartDate}</Text>
          <Text>{'광고 종료 날짜 : ' + nEndDate}</Text>
        </Card>
      );
    }

    useEffect(() => {
      axios.get<Ads>(`/api/ads/${index}`)
        .then((res) => {
          setAds(res.data);
        });
    }, [])

    return (
      <>
        <DetailDiv>
          <RenderAds/>
        </DetailDiv>
      </>
    );
}

export default Detail
