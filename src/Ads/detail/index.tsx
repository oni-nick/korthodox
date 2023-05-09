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

    const _image_id = ads == null ? '' : ads.image_id
    const _title = ads == null ? '' : ads.title
    const _subtitle = ads == null ? '' : ads.subtitle
    const _reward = ads == null ? '' : ads.reward
    let _start_date = new Date(ads == null ? '' : ads.start_date)
    //{ads == null ? '' : ads.start_date} 밀리초 변환 잘 안됨
    

    useEffect(() => {
      axios.get<Ads>(`/api/ads/${index}`)
        .then((res) => {
          setAds(res.data);
        });  
    }, [])    
    
    return (
      <>
        <DetailDiv>
          <Card hoverable style={{ width: 800, marginRight : '50px', marginBottom : '100px' }} cover={<img alt="10,000 krw" src={'/api/image/' + _image_id} />}>   
                <h1>{'광고 이름 : ' + _title}</h1>
                <Text>{'광고 내용 : ' + _subtitle}</Text>
                <Text>{'광고 리워드 : ' + _reward}</Text>
        </Card>
        </DetailDiv>
      </>
    );
}

export default Detail
