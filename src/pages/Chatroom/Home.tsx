import React from "react";
import { Col, Layout, Row } from "antd";
import { useNavigate } from "react-router-dom";
import ChatWindow from "./Chatwindow/Chatwindow";
import Infor from "./Infor/infor";
import SideBar from "../../components/SideBar/Sildebar";
import { MenuItem } from "../../types/Home";
import { Content } from "antd/es/layout/layout";

export interface HomeContextProps {
  HandleLogout?: () => void;
  HandleAddFriend?: () => void;
  HandleAddGroup?: () => void;
  UserList?: MenuItem[];
  GroupList?: MenuItem[];
  selectedItem?: MenuItem;
}

const HomeContext = React.createContext<HomeContextProps>({});

const Home = () => {
  const navigator = useNavigate();

  const ContextValue: HomeContextProps = {
    HandleLogout: () => {
      console.log("logout");
      navigator("/");
    },
  };

  return (
    <Layout hasSider>
      <HomeContext.Provider value={ContextValue}>
        <SideBar />

        <Row style={{ width: "70vw" }}>
          <Col span={16}>
            <ChatWindow />
          </Col>
          <Col span={8}>
            <Infor />
          </Col>
        </Row>
      </HomeContext.Provider>
    </Layout>
  );
};

export default Home;
