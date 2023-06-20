import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Collapse, Typography } from "antd";
import Map from "./Map";

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
        if (res.data) {
          setAdvertiserData(res.data);
        }
      });
  }, []);

  const extractedPairs = Object.entries(advertiserData).map(([key, value]) => `${key}: ${value}`);
  const tmp = Object.entries(advertiserData).map(([key, value]) => {
    if(key === 'data') {
        return value;
    }
  });
  const data = tmp[8]
  console.log(data)

  return (
    <>
      <Collapse accordion={true}>
        <Collapse.Panel
          key={"1"}
          header={
            <div>
              {extractedPairs.map((pair) => (
                <div key={pair}>{pair}</div>
              ))}
            </div>
          }
        >
        {data && <Map data={data} />}
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Advertiser;
