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
  UserAddOutlined
} from "@ant-design/icons";

import { useContext, useEffect,useState } from "react";
import { AppContext } from "../../context/app.context";
import React from "react";
import Message from "../../components/MainChat/Message";
import { GetChatHistory } from "../../apis/chat.api";

interface MessageProps {
  senderId: string;
  senderName: string;
  message: string;
}

export default function ChatWindow() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const { value, action } = useContext(AppContext);
  const [chatList, setChatList] = React.useState<MessageProps[]>([]);
  const [chatName, setChatName] = React.useState<string>("");

  useEffect(() => {
    try {
      (async () => {
        const chatHistory = await GetChatHistory(value?.selectedItemId || "");
        const { data } = chatHistory;

        console.log("Chat history: ", data);

        if (chatHistory) {
          setChatName(data.name);
          const msgs: MessageProps[] = data.chats.map((item) => ({
            senderId: item.user.id || "",
            senderName: item.user.username || "",
            message: item.message,
          }));
          setChatList(msgs);
        }
      })();
    } catch (error) {
      console.log("Get chat history error: ", error);
    }
  }, [value?.selectedItemId]);

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {!value?.selectedItemId && (
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
      {value?.selectedItemId && (
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
            <UserAddOutlined 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} 
            onClick={action?.HandleAddFriend}
            style={{  marginLeft: '100px',color: isHovered ? 'blue' : 'black', fontSize: '24px', transition: 'color 0.3s' }}/>
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
            {chatList.map((item, index) => {
              return (
                <Message
                  text={item.message}
                  photoUrl={
                    "https://i.pinimg.com/originals/e1/ed/eb/e1edeb6d3f086b74b0f33be6e665c10f.jpg"
                  }
                  displayName={item.senderName}
                  isOwner={item.senderId === value.user?.id}
                  key={index}
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
