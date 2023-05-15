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

  return (
    <Layout hasSider>
      <SideBar />

      <Layout className="site-layout" style={{ marginLeft: 350 }}>
        <Row>
          <Col span={13}>
            <Chatwindow />
          </Col>
          <Col span={5}>
            <Infor />
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
};

export default Home;
