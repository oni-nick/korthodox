import { loadPaymentWidget, PaymentWidgetInstance } from '@tosspayments/payment-widget-sdk';
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useUserState } from '../context/user';
import { Button, Input } from 'antd';

function Coin(){
    const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
    const paymentMethodsWidgetRef = useRef<ReturnType<
        PaymentWidgetInstance["renderPaymentMethods"]
    > | null>(null);
    const user = useUserState();
    const [price, setPrice] = useState(0);

    // echo -n 'adsrider' | base64
    const customerKey = 'YWRzcmlkZXI=';
    const clientKey = 'test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq';

    useEffect(() => {
        (async () => {
            const paymentWidget = await loadPaymentWidget(clientKey, customerKey);
            const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
                "#payment-widget",
                price
            );

            paymentWidgetRef.current = paymentWidget;
            paymentMethodsWidgetRef.current = paymentMethodsWidget;
        })()
    }, []);

    useEffect(() => {
        const paymentMethodsWidget = paymentMethodsWidgetRef.current;
        if (paymentMethodsWidget == null) {
            return;
        }
        paymentMethodsWidget.updateAmount(price, 'change amount');
    }, [price]);

    const onPay = async () => {
        const paymentWidget = paymentWidgetRef.current;

        try {
            await paymentWidget?.requestPayment({
                orderId: uuidv4(),
                orderName: 'ADS Token',
                customerName: 'ADS User',
                customerEmail: user.email,
                successUrl: `${window.location.origin}/coin/success`,
                failUrl: `${window.location.origin}/coin/fail`,
            });
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <>
        <h1>코인 거래 페이지 입니다.</h1>
        <div id="payment-widget" />
        <Input
          type="number"
          onChange={(event) => {
            setPrice(parseInt(event.target.value));
          }}
        />
        <Button onClick={onPay}>결제하기</Button>
        </>
    );
}

export default Coin;