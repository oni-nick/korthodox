import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom'
import { Div } from './Styles';
import { Button, Descriptions, Result } from 'antd';

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
            <Result
                status="success"
                title="결제 완료!"
                subTitle=""
                extra={[
                <>
                    <Descriptions bordered size="default">
                        <Descriptions.Item label="주문 아이디">{searchParams.get('orderId')}</Descriptions.Item>
                        <Descriptions.Item label="결제 금액">{Number(searchParams.get('amount')).toLocaleString()} ADS</Descriptions.Item>
                    </Descriptions><br/><br/>
                    <Link to='/'><Button type="primary" key="console">메인페이지</Button></Link>
                    <Link to='/mypage'><Button key="mypage">마이페이지</Button></Link>
                </>
                ]}
            />
        </Div>
    )
}
