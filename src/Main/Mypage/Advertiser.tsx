import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Collapse, Typography } from "antd";
import Map from "./Map";
import { dateConverter } from "../../Utils";

interface AdvertiserData {
  id: string;
  title: string;
  subtitle: string;
  reward: string;
  image_id: number;
  start_date: Date;
  end_date: Date;
  user_email: string;
  data: {
    id: string;
    ads_id: string;
    path: { latitude: string; longitude: string }[];
    meters: number;
    reward: string;
    hash: string;
    start_time: Date;
    end_time: Date;
  }[];
}
interface AdvertiserProps {
  from: string;
  to: string;
}

const Advertiser: React.FC<AdvertiserProps> = ({ from, to }) => {
  const [advertiserData, setAdvertiserData] = useState<AdvertiserData[]>([]);
  useEffect(() => {
    axios
      .get<AdvertiserData[]>("/api/statistics", {
        params: {
          from: from,
          to: to,
        },
      })
      .then((res) => {
        // 수정코드
        // Check if res.data is an array before setting the state
        if (Array.isArray(res.data)) {
          setAdvertiserData(res.data);
        } else {
          setAdvertiserData([res.data]); // if res.data is an object, wrap it in an array
        }
        // 이전코드
        // if (res.data) {
        //   setAdvertiserData(res.data);
        // }
      });
  }, []);


  // const extractedPairs = Object.entries(advertiserData).map(([key, value]) => `${key}: ${value}`);
  const AdsData = Object.entries(advertiserData).map(([key, value]) => {
    if (key === 'id'){ return '광고 번호 : ' + value }
    else if (key === 'title'){ return '광고 이름 : ' + value }
    else if (key === 'subtitle'){ return '광고 상세 : ' + value }
    else if (key === 'reward'){ return '리워드 : ' + value }
    else if (key === 'start_date'){ return '시작 날짜 : ' + value}
    else if (key === 'end_date'){ return '종료 날짜 : ' + value }
    else {return ''}
  })
  console.log(Object.entries(advertiserData))
  console.log(AdsData)


  // 주행기록 추출
  const tmp = Object.entries(advertiserData).map(([key, value]) => {
    if(key === 'data') {
        return value;
    }
  });
  const data = tmp[8]

  return (
    <>
      <Collapse accordion={true}>
        <Collapse.Panel
          key={"1"}
          header={
            <div>
              {AdsData.map((data, index) => (
                <div key={index}>{data}</div>
              ))}
            </div>
          }
        >
        {data && <Map data={data} />}
        </Collapse.Panel>
      </Collapse>
      <Collapse accordion={true}>
        {advertiserData.map((data, index) => (
          <Collapse.Panel
            key={index}
            header={
              <div>
                <div>광고 번호 : {data.id}</div>
                <div>광고 이름 : {data.title}</div>
                <div>광고 상세 : {data.subtitle}</div>
                <div>리워드 : {data.reward}</div>
                <div>시작 날짜 : {data.start_date.toString().slice(0, 12)}</div>
                <div>종료 날짜 : {data.end_date.toString().slice(0, 10)}</div>
              </div>
            }
          >
            {data.data && <Map data={data.data} />}
          </Collapse.Panel>
        ))}
      </Collapse>
    </>
  );
};

export default Advertiser;
