import React from "react";
import { Button, Layout, Menu, MenuProps, Space, theme } from "antd";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const { Header, Content, Sider } = Layout;

const Home = () => {
  const navigator = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const siderItems: MenuProps["items"] = [
    {
      key: "chat-group",
      icon: <TeamOutlined />,
      label: "Chat Group",
      children: [
        "chat-group-1",
        "chat-group-2",
        "chat-group-3",
        "chat-group-4",
        "chat-group-5",
      ].map((name, i) => ({ key: "gr-" + i + 1, label: name })),
    },
    {
      key: "chat-friends",
      icon: <UserOutlined />,
      label: "Friends",
      children: [
        "friend-1",
        "friend-2",
        "friend-3",
        "friend-4",
        "friend-5",
      ].map((name, i) => ({ key: "fr-" + i + 1, label: name })),
    },
  ];

  const HandleLogout = () => {
    console.log("logout");
    navigator("/");
  };

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
        width={230}
      >
        <Space direction="vertical" style={{ width: "100%", padding: "10px" }}>
          <div
            style={{
              height: 32,
              margin: 16,
              background: "rgba(80, 80, 80, 0.2)",
            }}
          />
          <Menu
            mode="inline"
            defaultSelectedKeys={["2"]}
            items={siderItems}
            theme="dark"
          />
          <Button danger type="primary" block onClick={HandleLogout}>
            Logout
          </Button>
        </Space>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 230 }}>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          Header
        </Header>
        <Content style={{ margin: "16px 10px 16px 0px", overflow: "initial" }}>
          <div
            style={{
              padding: 10,
              textAlign: "center",
              background: colorBgContainer,
            }}
          >
            <p>long content</p>
            {
              // indicates very long content
              Array.from({ length: 100 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? "more" : "..."}
                  <br />
                </React.Fragment>
              ))
            }
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
