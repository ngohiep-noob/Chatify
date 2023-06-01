import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  GithubFilled,
  AlignLeftOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Spin, message } from "antd";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { RegisterAPI, UserCredentials } from "../../apis/auth.api";
import useMessage from "antd/es/message/useMessage";

const StyledForm = styled(Form)`
  background-color: while;
  width: 440px;
  height: 500px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  .form-header {
    font-size: 40px;
    text-align: center;
    color: #171a1fff;
    font-family: Epilogue;
  }
  .input {
    height: 40px;
  }
  .login-form-button {
    width: 359px;
    height: 40px;
    border-radius: 4px;
    background: #00bdd6ff;
  }
  .signup {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  .login-form-forgot {
    margin-left: 43%;
    color: #00bdd6ff;
  }
  .color {
    margin-left: 5px;
    color: #00bdd6ff;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #00bdd6ff;
    border-color: #00bdd6ff;
  }
  .middel {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logooo {
    position: absolute;
    top: 32px;
    left: 32px;
  }
`;

const Login = () => {
  const navigator = useNavigate();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const OnFinish = (values: any) => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const creds: UserCredentials = {
          username: values.username,
          password: values.password,
          email: values.email,
          fullname: values.fullname,
        };

        await RegisterAPI(creds);

        navigator("/home");
        setLoading(false);
      } catch (error) {
        messageApi.error("Có lỗi xảy ra! Không thể đăng ký tài khoản!");
        setLoading(false);
        console.error(error);
      }
    };

    fetchData();
  };

  return (
    <StyledForm
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={OnFinish}
    >
      {contextHolder}
      <h1 className="form-header">Đăng ký</h1>

      <Form.Item
        name="username"
        rules={[{ required: true, message: "Hãy nhập tên tài khoản!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="tên tài khoản"
          className="input"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Hãy nhập mật khẩu!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="mật khẩu"
          className="input"
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Hãy nhập email của bạn!" }]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Email"
          className="input"
        />
      </Form.Item>

      <Form.Item
        name="fullname"
        rules={[
          {
            required: true,
            message: "Hãy nhập họ và tên!",
          },
        ]}
      >
        <Input
          prefix={<AlignLeftOutlined className="site-form-item-icon" />}
          placeholder="Họ và tên"
          className="input"
        />
      </Form.Item>

      <Form.Item className="middel">
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          loading={loading}
        >
          Đăng ký
        </Button>
        <div className="signup">
          Bạn đã có tài khoản?
          <Link to="/" className="color">
            {" "}
            Đăng nhập!
          </Link>
        </div>
      </Form.Item>
    </StyledForm>
  );
};

export default Login;
