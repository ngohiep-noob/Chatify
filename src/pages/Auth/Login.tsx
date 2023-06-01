import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Spin } from "antd";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { LoginAPI, UserCredentials } from "../../apis/auth.api";
import { AppContext } from "../../context/app.context";

const StyledForm = styled(Form)`
  background-color: while;
  width: 440px;
  height: 450px;
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
  const { action } = useContext(AppContext);

  const OnFinish = (values: any) => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const credentials: UserCredentials = {
          username: values.username,
          password: values.password,
        };
        await LoginAPI(credentials);

        if (action?.showMessage)
          action.showMessage("success", "Đăng nhập thành công!");

        navigator("/home");
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (action?.showMessage)
          action.showMessage("error", "Sai tên tài khoản hoặc mật khẩu!");
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
      <h1 className="form-header">Đăng nhập</h1>

      <Form.Item
        name="username"
        rules={[{ required: true, message: "Nhập tên tài khoản" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Tên tài khoản"
          className="input"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Nhập mật khẩu" }]}
        style={{ marginBottom: "50px" }}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Mật khẩu"
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
          Đăng nhập
        </Button>
        <div className="signup">
          Bạn không có tài khoản?
          <Link to="/signUp" className="color">
            {" "}
            Đăng ký
          </Link>
        </div>
      </Form.Item>
    </StyledForm>
  );
};

export default Login;
