import React from "react";
import { Layout, MenuProps, theme, Row, Col } from "antd";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import Chatwindow from "./Chatwindow/Chatwindow";
import Infor from "./Infor/infor";

import SideBar from "../../components/SideBar/Sildebar";

const Home = () => {
  const navigator = useNavigate();

  const HandleLogout = () => {
    console.log("logout");
    navigator("/");
  };
  const { Sider } = Layout;
  return (
    <Layout hasSider>
      <SideBar />
      <Sider
      style={{
        height: "100vh",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      width={790}
      theme="light"
    >
    <Chatwindow />
    </Sider>
    <Sider
      style={{
        height: "100vh",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      width={300}
      theme="light"
    >
    <Infor/>
    </Sider>
      
    </Layout>
  );
};

export default Home;
