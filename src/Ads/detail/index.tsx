import { Descriptions } from 'antd';
import { useParams, useLocation } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { DetailDiv } from "./Styles";

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
    const [ads, setAds] = useState<Ads[]>([]);
    let { index }  = useParams();

    const ads_key = Object.keys(ads);
    const ads_value = Object.values(ads);
    
    const _id = String(ads_value[0])
    const title = String(ads_value[1])

    
    

    useEffect(() => {
        axios.get<Ads[]>(`/api/ads/${index}`)
          .then((res) => {
            setAds(res.data);
          });  
      }, [])    
      // Narowing
      
      //const Ads_Index = 
      //(typeof index) !== 'undefined' 
      //? ads[index]
     //: ads[1]
    
    return(
      <>
        {console.log('ads 1: ',  ads)}
        {console.log('ads 2: ',  Object.keys(ads))}
        {console.log('ads 3: ',  Object.values(ads))}
        <DetailDiv>
            <h1>현재 페이지의 파라미터는 { index } 입니다.</h1>
      
        </DetailDiv>

        </>
    );
}

export default Detail
