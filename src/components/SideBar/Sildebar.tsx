import React from "react";
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
import ListItem from "./FriendInfo";
import {
  LogoutOutlined,
  TeamOutlined,
  UserAddOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

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

  .ctrl-btn {
    margin: 0 3px;
  }

  .gmail {
    font-size: 12px;
  }
  .name {
    font-size: 17px;
    font-family: Epilogue;
  }
`;

const siderItems: MenuProps["items"] = [
  {
    key: "chat-group",
    icon: <TeamOutlined />,
    label: "Chat Group",
    children: [
      <ListItem />,
      <ListItem />,
      <ListItem />,
      <ListItem />,
      <ListItem />,
      <ListItem />,
      <ListItem />,
      <ListItem />,
      <ListItem />,
      <ListItem />,
    ].map((name, i) => ({ key: "gr-" + i + 1, label: name })),
  },
  {
    key: "chat-friends",
    icon: <UserOutlined />,
    label: "Friends",
    children: ["friend-1", "friend-2", "friend-3", "friend-4"].map(
      (name, i) => ({ key: "fr-" + i + 1, label: name })
    ),
  },
];

export default function SideBar() {
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
            Nguyễn Chánh Nghĩa
          </Text>
          <br />
          <Text type="secondary" className="gmail">
            nguyenchanhnghia2917@gmail.com
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
        justify="center"
      >
        <Col span={5}>
          <Button size="large" type="primary">
            <UserAddOutlined />
          </Button>
        </Col>
        <Col span={5}>
          <Button size="large" type="primary">
            <UsergroupAddOutlined />
          </Button>
        </Col>
        <Col span={5}>
          <Button danger size="large" type="primary">
            <LogoutOutlined />
          </Button>
        </Col>
      </Row>

      <Menu
        className="menu"
        mode="inline"
        defaultSelectedKeys={["2"]}
        items={siderItems}
        onSelect={(item) => {
          console.log(item);
        }}
      />
    </Sider>
  );
}
