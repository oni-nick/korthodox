import { MypageDiv, GraphDiv, StatsDiv, Text, StyledRangePicker } from './Styles';
import { Button, DatePicker, Descriptions } from 'antd';
import { useUserState } from '../../context/user';
import { dateConverter, UserBalance } from '../../Utils';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BigNumber from 'bignumber.js';
import PieGraph from './PieGraph';
import LineGraph from './LineGraph';
import { PieData, LineData } from './data';

interface RiderData {
    date : string;
    meters : number;
    reward : string;
};
interface AdverData {
    id: string,
    title: string,
    subtitle: string,
    reward: string,
    image_id: number,
    start_date: Date,
    end_date: Date,
    user_email: string,
    data: {
      id: string,
      ads_id: string,
      path: {lattitude: string, longitutde: string}[],
      meters: number,
      reward: string,
      hash: string,
      start_time: Date,
      end_time: Date,
    }[],
};
interface AdminData {
    amount: string,
    hash: string | '',
    timestamp: number,
    type
       : '입금'
       | '출금'
       | '주행보상-${ads.id}'
       | '광고등록'
       | '이용권구매'
       | '코인구매'
}


function Mypage() {
  const user = useUserState();
  const [isFrom, setFrom] = useState('');
  const [isTo, setTo] = useState('');
  const [riderData, setRiderData] = useState<RiderData[]>([]);
  const [adverData, setAdverData] = useState<AdverData[]>([]);
  const [adminData, setAdminData] = useState<AdminData[]>([]);
  const [balance, setBalance] = useState<UserBalance[]>([]);
  const adsBalance = balance.find((b) => b.type === 'ADS')?.available || '0';

  // DatePicker 날짜 변화
  const handleRangePickerChange = (dates: any, dateStrings: [string, string]) => {
    const [from, to] = dateStrings;
    setFrom(from);
    setTo(to);
  };

  // 유저 잔액 확인
  useEffect(() => {
    axios.get<UserBalance[]>('/api/user/balance').then((res) => {
      if (res.data) {
        setBalance(res.data);
      }
    });
  }, []);


  // 통계 버튼 클릭 시
  // 유저 타입 별 처리
  function getStatistics(from: string, to: string) {
    if (user.level === '라이더'){
        axios.get<RiderData>('/api/statistics', {
            params: {
              from: from,
              to: to,
            },
          })
          .then((res) => {
            if (res.data) {
                setRiderData([res.data]);
            }
          });

    const RiderGraphData = riderData.map((d) => {
        const data_r = [d.date, d.reward];
        const data_m = [d.date, d.meters];
        return {reward : data_r, meters : data_m}
    })
    console.log(RiderGraphData);
    // 막대그래프 데이터 넘겨주면 됨
    // 라이더 계정이 없어서 코드 동작하는지 확인 못함
    }

    else if (user.level === '광고주'){
        axios.get<AdverData>('/api/statistics', {
            params: {
              from: from,
              to: to,
            },
          })
          .then((res) => {
            if (res.data) {
                setAdverData([res.data]);
            }
          });
    }

    else if (user.level === '운영자'){
        axios.get<AdminData>('/api/statistics', {
            params: {
              from: from,
              to: to,
            },
          })
          .then((res) => {
            if (res.data) {
                setAdminData([res.data]);
            }
          });
        // adminData.reduce((acc, cur) => )
    }

    else {
        // 유저 타입이 null인 경우
    }
  }

  // 유저 타입 별 Render 함수
  const renderRider = () => {
    return (
        <div>
            라이더임
        </div>
    );
  };

  const renderAdver = () => {
    return (
        <div>
            광고주임
        </div>
    );
  };

  const renderAdmin = () => {
    return (
        <div>
            운영자임
        </div>
    );
  };


  return (
    <MypageDiv>
        <Descriptions bordered size="default">
          <Descriptions.Item label="유저 이름">{user.email}</Descriptions.Item>
          <Descriptions.Item label="유저 타입">{user.level == null ? 'null' : user.level}</Descriptions.Item>
          <Descriptions.Item label="보유 자산">{new BigNumber(adsBalance).toFormat()} ADS</Descriptions.Item>
          <Descriptions.Item label="가입 일자">{dateConverter(new Date(user.join_time))}</Descriptions.Item>
          <Descriptions.Item label="이용권 만료 기간">{dateConverter(new Date(user.expired_date))}</Descriptions.Item>
          <Descriptions.Item label="개인 지갑 주소">{user.address}</Descriptions.Item>
        </Descriptions>
        <StatsDiv>
          <Text>날짜 선택 </Text>
          <StyledRangePicker onChange={handleRangePickerChange} />
          <Button type="primary" onClick={() => getStatistics(isFrom, isTo)}>
            통계 보기
          </Button>
        </StatsDiv>

        {user.level === '라이더' && renderRider()}
        {user.level === '광고주' && renderAdver()}
        {user.level === '운영자' && renderAdmin()}

    </MypageDiv>
  );
}

export default Mypage;