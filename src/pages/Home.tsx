import React from "react";
import { Col, Layout, Row } from "antd";
import { useNavigate } from "react-router-dom";
import ChatWindow from "./Home/ChatWindow";
import SideBar from "../components/SideBar/SideBar";
import { MenuItem } from "../types/Home";

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

        <Row style={{ width: "75vw" }}>
          <Col span={24}>
            <ChatWindow />
          </Col>
          {/* <Col span={6}>
            <Infor />
          </Col> */}
        </Row>
      </HomeContext.Provider>
    </Layout>
  );
};

export default Home;
