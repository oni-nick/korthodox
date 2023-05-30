import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom'
import { Div, BottomButton } from './Styles';
import { Button } from 'antd';

export function SuccessPage() {
    const [searchParams] = useSearchParams();
    const [result, setResult] = useState();

    // 서버로 승인 요청
    useEffect(() => {
        axios.post('/api/payment/success', {
            paymentType: searchParams.get('paymentType'),
            orderId: searchParams.get('orderId'),
            paymentKey: searchParams.get('paymentKey'),
            amount: searchParams.get('amount'),
        }).then((res) => setResult(res.data));
    }, []);

    return (
        <Div>
            <h1>결제 성공</h1>
            <div>{`주문 아이디: ${searchParams.get('orderId')}`}</div>
            <div>
                {`결제 금액: ${Number(
                    searchParams.get('amount')
                ).toLocaleString()}원`}
            </div>
            <BottomButton>
                <Link to='/mypage'>
                    <Button>mypage 보러가기</Button>
                </Link>
            </BottomButton>
        </Div>
    )
}
