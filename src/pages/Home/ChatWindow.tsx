import {
  Avatar,
  Button,
  Col,
  Empty,
  Input,
  Row,
  Tooltip,
  Typography,
  Form
} from "antd";
import {
  AntDesignOutlined,
  SendOutlined,
  UserOutlined,
  UserAddOutlined
} from "@ant-design/icons";
import { JoinRoomMadall } from "../../components/SideBar/JoimRoomModal";
import { useContext, useEffect,useState } from "react";
import { AppContext } from "../../context/app.context";
import React from "react";
import Message from "../../components/MainChat/Message";
import { GetChatHistory } from "../../apis/chat.api";
import {
  JoinRoomRequest,
  JoinRoomAdd
} from "../../apis/room.api";
interface MessageProps {
  senderId: string;
  senderName: string;
  message: string;
}

interface ChatInfo {
  name: string;
  desc: string;
  memberCount: number;
}
import axios from "axios";
export default function ChatWindow() {
  const { value, action } = useContext(AppContext);
  const [form] = Form.useForm();
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleOk = async () => {
    setLoading(true);
    try {
      const createJoinRequest: JoinRoomRequest = {
        roomId:value?.selectedItemId,
        usernames: form.getFieldValue("members"),
      };

      console.log("create room request: ", createJoinRequest);

      await JoinRoomAdd(createJoinRequest);
      action?.showMessage?.("success", "Add members successfully!");
      setIsModalOpen(false);
      setLoading(false);
    } catch (error) {
      action?.showMessage?.("error", "Cannot Add members ");
      setLoading(false);
    }

    setIsModalOpen(false);

  };
  const handleCancel = () => {
    axios.CancelToken.source().cancel();
    setIsModalOpen(false);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
 
  const [chatList, setChatList] = React.useState<MessageProps[]>([]);
  const [chatInfo, setChatInfo] = React.useState<ChatInfo>();

  useEffect(() => {
    try {
      if (!value?.selectedItemId) return;
      (async () => {
        const chatHistory = await GetChatHistory(value?.selectedItemId || "");
        const { data } = chatHistory;

        console.log("Chat history: ", data);

        const msgs: MessageProps[] = data.chats.map((item) => ({
          senderId: item.user.id || "",
          senderName: item.user.username || "",
          message: item.message,
        }));

        setChatList(msgs);

        setChatInfo({
          name: data.name,
          desc: data.desc,
          memberCount: data.memberCount,
        });
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
              <Typography.Text
                className="header_name"
                strong
                style={{ fontSize: "20px" }}
              >
                {chatInfo?.name}
              </Typography.Text>{" "}
              <br />
              <Typography.Text style={{ fontSize: "15px" }}>
                {`${chatInfo?.desc || ""} - ${
                  chatInfo?.memberCount || 0
                } members`}
              </Typography.Text>
            </Col>

            <Col span={3}>
            <UserAddOutlined 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} 
            onClick={() => setIsModalOpen(true)}
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
      <JoinRoomMadall
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        form={form}
      />
    </div>
    
  );
}
