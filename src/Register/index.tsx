import styled from 'styled-components';
import axios, { AxiosError } from 'axios';
import { Button, Form, Input, Radio } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import type { RadioChangeEvent } from 'antd';

const LoginForm = styled(Form)`
    margin-left: auto;
    margin-right: auto;
    max-width: 600px;
`;
const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;
const WariningMessage = styled.p`
    color: red;
    text-align: center;
`;
const Title = styled.h1`
    text-align: center;
`;

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
};

const Register = () => {
    const [form] = Form.useForm();
    const [errMessage, setErrMessage] = useState('');
    const navigate = useNavigate();
    const [type, setType] = useState('라이더');

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setType(e.target.value);
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFinish = async (values: any) => {
        try {
            await axios.post('/api/user/signin', {
                email: values.email,
                password: values.pw,
                level: type
            });
            navigate('/login');
        } catch (e) {
            const axiosError = e as AxiosError;
            if (axiosError.response?.status === 400) {
                setErrMessage('이미 등록된 ID 입니다.');
            } else {
                setErrMessage('예기치 못한 에러가 발생하였습니다 잠시후 시도해주세요.');
            }
            onReset();
        }
    };

    return (
        <>
            <Title>AdsRider 회원가입</Title>
            <LoginForm
                {...layout}
                onFinish={onFinish}
                form={form}
                name="loginForm"
            >
                <Form.Item name="email" label="email" rules={[{required: true}]}>
                    <Input />
                </Form.Item>
                <Form.Item name="pw" label="pw" rules={[{required: true}]}>
                    <Input type="password"/>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <ButtonWrapper>
                        <Button type="primary" htmlType="submit">등록하기</Button>&nbsp;&nbsp;
                        <Link to="/login"><Button htmlType="button">취소하기</Button></Link>
                    </ButtonWrapper>
                </Form.Item>
                <Form.Item name="level" label="유형" rules={[{required: true}]}>
                    <Radio.Group onChange={onChange} value={type}>
                      <Radio value={'라이더'}>라이더</Radio>
                      <Radio value={'광고주'}>광고주</Radio>
                    </Radio.Group>
                </Form.Item>
            </LoginForm>
            {
                errMessage
                    ? <WariningMessage>{errMessage}</WariningMessage>
                    : <></>
            }
        </>
    );
};

export default Register;
