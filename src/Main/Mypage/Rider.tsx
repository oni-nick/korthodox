import axios from "axios";
import { useEffect, useState } from "react";
import LineGraph, { LineGraphData, LinePoint } from "./LineGraph";
import { Legend, LineGraphDiv, RiderDiv } from './Styles';

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
    const [isNone, setNone] = useState(true);
    useEffect(() => {
        axios.get<RiderData[]>('/api/statistics', {
            params: {
                from: from,
                to: to,
            },
        })
        .then((res) => {
            if (res.data) {
                setNone(false)
                setRiderData(res.data);
            }
        });
    }, [to]);

    const RewardData: LinePoint[] = riderData.map((d, index) => ({
        x: d.date,
        y: parseFloat(d.reward),
    }));
    const MetersData: LinePoint[] = riderData.map((d) => ({
        x: d.date,
        y: d.meters,
    }));

    const RiderReward : LineGraphData[]  = [
        {
            id : 'reward',
            color : 'blue',
            data : RewardData
        }]

    const RiderMeters : LineGraphData[] = [{
        id : 'meters',
        color :"hsl(300, 70%, 50%)",
        data : MetersData,
    }]

    return(
    <>
        {!isNone
        ? <>
            {riderData.length > 0 ? (
            <RiderDiv>
                <LineGraphDiv>
                    <LineGraph data={RiderMeters} axis1={'Meters'} axis2={'Date'}  />
                    <Legend>미터 그래프</Legend>
                </LineGraphDiv>
                <LineGraphDiv>
                    <LineGraph data={RiderReward} axis1={'Reward'} axis2={'Date'} />
                    <Legend>리워드 그래프</Legend>
                </LineGraphDiv>
            </RiderDiv>
          ) : (
            <p>Loading...</p>
          )}

        </>
        : '통계 데이터가 없습니다'}
    </>

    );
}
export default Rider;