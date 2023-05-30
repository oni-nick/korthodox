import { loadPaymentWidget, PaymentWidgetInstance } from '@tosspayments/payment-widget-sdk';
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useUserState } from '../context/user';
import { AmountInput, AmountInputWrapper, Div, Spacer, SubmitButton, Text, TossModuleWrapper } from './Styles';

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
        <Div>
            <Text>다음 결제 수단으로 ADS 코인을 구매할 수 있습니다</Text>
            <TossModuleWrapper>
                <div id="payment-widget" />
            </TossModuleWrapper>
            <AmountInputWrapper>
                <Spacer />
                <p>구매할 금액 :</p>
                <AmountInput
                    type="number"
                    onChange={(event) => {
                        setPrice(parseInt(event.target.value));
                    }}
                />
                <SubmitButton onClick={onPay}>결제하기</SubmitButton>
                <Spacer />
            </AmountInputWrapper>
        </Div>
    );
}

export default Coin;