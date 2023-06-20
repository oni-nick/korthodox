import axios from "axios";
import { useEffect, useState } from "react";
import LineGraph, { LineGraphData, LinePoint } from "./LineGraph";
import { GraphDiv } from './Styles';

interface RiderData {
    date : string;
    meters : number;
    reward : string;
};

interface RiderProps {
    from : string;
    to : string;
}

const Rider : React.FC<RiderProps> = ({from, to}) => {
    const [riderData, setRiderData] = useState<RiderData[]>([]);
    useEffect(() => {
        axios.get<RiderData[]>('/api/statistics', {
            params: {
                from: from,
                to: to,
            },
        })
        .then((res) => {
            if (res.data) {
                setRiderData(res.data);
            }
        });
    }, []);

    const RewardData: LinePoint[] = riderData.map((d, index) => ({
        x: d.date,
        y: parseInt(d.reward),
    }));
    const MetersData: LinePoint[] = riderData.map((d) => ({
        x: d.date,
        y: d.meters,
    }));

    const RiderReward : LineGraphData[]  = [{
        id : 'reward',
        color : 'blue',
        data : RewardData
    }]

    const RiderMeters : LineGraphData[] = [{
        id : 'meters',
        color :"hsl(300, 70%, 50%)",
        data : MetersData,
    }]
    console.log(RiderReward)
    console.log(RiderMeters)

    return(
    <>
       {riderData.length > 0 ? (
        <div>
            <GraphDiv>
              <LineGraph data={RiderReward} axis1={'Reward'} axis2={'Date'} />
            </GraphDiv>
            <GraphDiv>
                <LineGraph data={RiderMeters} axis1={'Meters'} axis2={'Date'}  />
            </GraphDiv>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>

    );
}
export default Rider;