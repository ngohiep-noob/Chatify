import React, { useEffect } from "react";
import { Col, Layout, Row } from "antd";
<<<<<<< HEAD:src/pages/Chatroom/Home/Home.tsx
import ChatWindow from "../Chatwindow/Chatwindow";
import SideBar from "../../../components/SideBar/SideBar";
import { GetUserList, getGroupList } from "../../../apis/user.api";
import { AppContext } from "../../../context/app.context";
=======
import ChatWindow from "./ChatWindow";
import SideBar from "../../components/SideBar/SideBar";
import { GetUserList, getGroupList } from "../../apis/user.api";
import { AppContext } from "../../context/app.context";
>>>>>>> eeb3f25f49d696e4d0b3fa994a180142d309fd84:src/pages/Home/Home.tsx

const Home = () => {
  const { value, action } = React.useContext(AppContext);

  useEffect(() => {
    const userList = GetUserList();
    const groupList = getGroupList();
    if (action?.setGroupList && action?.setFriendList) {
      action?.setGroupList(groupList);
      action?.setFriendList(userList);
    }
  }, []);

  useEffect(() => {
    // call api
    // set data vao value thông qua action
  }, [])

  return (
    <Layout hasSider>
      <SideBar />

      <Row style={{ width: "75vw" }}>
        <Col span={24}>
          <ChatWindow />
        </Col>
        {/* <Col span={6}>
            <Infor />
          </Col> */}
      </Row>
    </Layout>
  );
};

export default Home;
