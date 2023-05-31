import {
  Avatar,
  Button,
  Col,
  Layout,
  Menu,
  MenuProps,
  Row,
  Typography,
} from "antd";
import Logo from "./Logo";
import ListItem from "./ListItem";
import {
  LogoutOutlined,
  TeamOutlined,
  UserAddOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import React from "react";
import { AppContext } from "../../context/app.context";

const { Sider } = Layout;
const { Text } = Typography;

export enum chatType {
  FRIEND = "FRIENDS",
  ROOM = "ROOMS",
}

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
            key: chatType.FRIEND,
            icon: <UserOutlined />,
            label: "Friends",
            children: value?.friendList
              ? value.friendList.map((item) => ({
                  key: item.id,
                  label: <ListItem {...item} />,
                }))
              : [],
          },
          {
            key: chatType.ROOM,
            icon: <TeamOutlined />,
            label: "Rooms",
            children: value?.groupList
              ? value.groupList.map((item) => ({
                  key: item.id,
                  label: <ListItem {...item} />,
                }))
              : [],
          },
        ]}
        onSelect={(item) => {
          const { key, keyPath } = item;
          if (action?.setSelectedItem)
            action?.setSelectedItem(key as string, keyPath[1] as chatType);
        }}
      />
    </Sider>
  );
}
