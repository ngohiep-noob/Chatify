import {
  Avatar,
  Button,
  Col,
  Empty,
  Input,
  Row,
  Tooltip,
  Typography,
} from "antd";
import {
  AntDesignOutlined,
  SendOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { useContext, useEffect } from "react";
import { AppContext } from "../../../context/app.context";
import React from "react";
import { GetChatInfo } from "../../../apis/chat.api";
import Message from "../../../components/MainChat/Message";

interface MessageProps {
  id: string;
  name: string;
  message: string;
}

export default function ChatWindow() {
  const { value, action } = useContext(AppContext);
  const [chatList, setChatList] = React.useState<MessageProps[]>([]);
  const [chatName, setChatName] = React.useState<string>("");

  useEffect(() => {
    if (value?.selectedItem) {
      const chatInfo = GetChatInfo(value?.selectedItem || "");
      console.log(chatInfo);
      setChatList(chatInfo?.msgs || []);
      setChatName(chatInfo?.chatName || "");
    }
  }, [value?.selectedItem]);

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {!value?.selectedItem && (
        <Empty
          description={false}
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      )}
      {value?.selectedItem && (
        <>
          <Row style={{ height: "10vh" }} align="middle">
            <Col
              span={2}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                className="header_avatar"
                size={50}
                src="https://i.pinimg.com/originals/e1/ed/eb/e1edeb6d3f086b74b0f33be6e665c10f.jpg"
              ></Avatar>
            </Col>

            <Col span={18}>
              <Typography.Text className="header_name" strong>
                {chatName || "Chat name"}
              </Typography.Text>{" "}
            </Col>

            <Col span={3}>
              <Avatar.Group
                maxCount={2}
                maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
              >
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                  />
                </Tooltip>
                <Avatar
                  style={{ backgroundColor: "#1890ff" }}
                  icon={<AntDesignOutlined />}
                />
              </Avatar.Group>
            </Col>
          </Row>

          <div
            style={{
              overflow: "auto",
              height: "80vh",
              padding: "10px",
              backgroundColor: "#FFF",
            }}
          >
            {chatList.map((item) => {
              return (
                <Message
                  text={item.message}
                  photoUrl={
                    "https://i.pinimg.com/originals/e1/ed/eb/e1edeb6d3f086b74b0f33be6e665c10f.jpg"
                  }
                  displayName={item.name}
                  role={item.id === value.user?.id ? "owner" : "guest"}
                ></Message>
              );
            })}
          </div>

          <Row
            justify="space-between"
            align="middle"
            style={{ padding: "10px", height: "10vh" }}
          >
            <Col span={21}>
              <Input placeholder=" Type a message" />
            </Col>
            <Col
              span={3}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button className="button" type="primary">
                Send
                <SendOutlined />
              </Button>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
}
