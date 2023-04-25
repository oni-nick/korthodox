import { Button, Checkbox, Form, Input } from 'antd';
import { P, DivWithdraw, P2 } from "./Styles"

function Withdraw(){

    const onFinish = (values: any) => {
        alert('Success:');
      };
      
      const onFinishFailed = (errorInfo: any) => {
        alert('Failed:');
      };

    return(
        <DivWithdraw>
              <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                    label="출금 금액"
                    name="username"
                    rules={[{ required: true, message: '금액을 확인해주세요!' }]}
                    >
                    <Input />
                    </Form.Item>
                   
                   <P>※주의사항※<br/>암호화폐 특성상 출금신청이 완료되면 취소가 불가하기 때문에, 출금 시 주소를 확인 후 입력해 주시기 바랍니다.</P>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>동의합니다.</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        출금하기
                    </Button>
                    </Form.Item>
                </Form>
        </DivWithdraw>
    );
}

export default Withdraw;