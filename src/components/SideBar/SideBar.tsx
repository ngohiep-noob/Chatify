import { Avatar, Button, Col, Layout, Menu, Row, Typography } from "antd";
import Logo from "./Logo";
import ListItem from "./ListItem";
import {
  LogoutOutlined,
  TeamOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import React, { useEffect } from "react";
import { AppContext } from "../../context/app.context";
import { getRoomList, getUserInfor } from "../../apis/user.api";
import { MenuItem } from "../../types/Home";
import {ContextValue} from "../../context/app.context"
import axios from "axios";
import { User } from "../../types/User";

const { Sider } = Layout;
const { Text } = Typography;

const StyledRow = styled(Row)`
  .avatar-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .details-col {
    height: 60%;
  }

  .gmail {
    font-size: 12px;
  }

  .name {
    font-size: 17px;
    font-family: Epilogue;
  }
`;

export default function SideBar() {
  const { value, action } = React.useContext(AppContext);

  useEffect(() => {
    try {
      (async () => {
        const roomList = await getRoomList();
        console.log("roomList: ", roomList);
        const menuItemList: MenuItem[] = roomList.map((room) => ({
          id: room.id,
          name: room.name,
          lastMessage: room.lastMessage.message,
          lastMessageTime: room.lastMessage.createdAt,
          lastChattingUsername: room.lastMessage.user?.username || "",
        }));

        if (action?.setRoomList) action.setRoomList(menuItemList);


        // fetch profile ở đây
        const profile = await getUserInfor();
        console.log(profile);
        const userr: ContextValue["user"] ={
          id:profile.id,
          email:profile.email,
          name: profile.fullName,
        }

        if (action?.setUserInfo) action.setUserInfo(userr);

      })();
    } catch (error) {
      console.log("Side bar error: ", error);
    }
  }, []);

  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      width={"25vw"}
      theme="light"
    >
      <Logo />
      <hr style={{ width: "55%", marginBottom: "10px" }}></hr>
      <StyledRow justify="center" align="middle">
        <Col span={6} className="avatar-col">
          <Avatar
            size={55}
            src="https://i.pinimg.com/originals/e1/ed/eb/e1edeb6d3f086b74b0f33be6e665c10f.jpg"
          ></Avatar>
        </Col>
        <Col span={18} className="details-col">
          <Text strong className="name">
            {value?.user?.name}
          </Text>
          <br />
          <Text type="secondary" className="gmail">
            {value?.user?.email}
          </Text>
        </Col>

        <hr
          style={{
            width: "90%",
            marginBottom: "20px",
            marginTop: "10px",
            color: "#27AEF2 ",
          }}
        ></hr>
      </StyledRow>

      <Row
        style={{ width: "75%", margin: "0 auto" }}
        align="middle"
        justify="space-evenly"
      >
        <Col span={5}>
          <Button type="primary" onClick={action?.HandleAddFriend}>
            <UserAddOutlined />
          </Button>
        </Col>
        <Col span={5}>
          <Button type="primary" onClick={action?.HandleAddGroup}>
            <UsergroupAddOutlined />
          </Button>
        </Col>
        <Col span={5}>
          <Button danger type="primary" onClick={action?.HandleLogout}>
            <LogoutOutlined />
          </Button>
        </Col>
      </Row>

      <Menu
        className="menu"
        mode="inline"
        items={[
          {
            key: "room",
            icon: <TeamOutlined />,
            label: "Rooms",
            children: value?.roomList
              ? value.roomList.map((item) => ({
                  key: item.id,
                  label: <ListItem {...item} />,
                }))
              : [],
          },
        ]}
        onSelect={(item) => {
          const { key } = item;
          if (action?.setSelectedItem) action?.setSelectedItem(key as string);
        }}
      />
    </Sider>
  );
}
