import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Spin } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const StyledForm = styled(Form)`
  background-color: #f7f5ec;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  .form-header {
    font-size: 1.5em;
    text-align: center;
    color: #7077db;
  }
`;

const Login = () => {
  const navigator = useNavigate();
  const [loading, setLoading] = useState(false);

  const OnFinish = (values: any) => {
    console.log("Received values of form: ", values);
    setLoading(true);
    setTimeout(() => {
      navigator("/home");
      setLoading(false);
    }, 500);
  };

  return (
    <Wrapper>
      <Spin spinning={loading}>
        <StyledForm
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={OnFinish}
        >
          <h1 className="form-header">Login</h1>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </StyledForm>
      </Spin>
    </Wrapper>
  );
};

export default Login;
