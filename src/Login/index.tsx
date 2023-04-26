import styled from 'styled-components';
import axios, { AxiosError } from 'axios';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UserInfo, useUserDispatch } from '../context/user';

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

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
};

const Login = () => {
    const [form] = Form.useForm();
    const [errMessage, setErrMessage] = useState('');
    const dispatch = useUserDispatch();
    const navigate = useNavigate();

    const onReset = () => {
        form.resetFields();
    };

    const onFinish = async (values: any) => {
        try {
            const user = await axios.post<UserInfo>('/api/user/login', {
                email: values.email,
                password: values.pw,
            });
            dispatch({ type: 'LOG_IN', data: user.data });
            navigate('/')
        } catch (e) {
            const axiosError = e as AxiosError;
            if (axiosError.status === 400) {
                setErrMessage('잘못된 id 혹은 password 입니다.');
            } else {
                setErrMessage('예기치 못한 에러가 발생하였습니다 잠시후 시도해주세요.');
            }
            onReset();
        }
    };

    return (
        <>
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
                        <Button type="primary" htmlType="submit">로그인</Button>
                        <Button htmlType="button">회원가입</Button>
                    </ButtonWrapper>
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

export default Login;
