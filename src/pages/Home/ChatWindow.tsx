import { Avatar, Button, Col, Empty, Input, Row, Typography, Form } from "antd";
import { SendOutlined, UserAddOutlined } from "@ant-design/icons";
import { JoinRoomModal as JoinRoomModal } from "../../components/SideBar/JoinRoomModal";
import { createRef, useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context/app.context";
import Message from "../../components/MainChat/Message";
import { GetChatHistory } from "../../apis/chat.api";
import { JoinRoomRequest, JoinRoomAdd } from "../../apis/room.api";
import axios from "axios";
import SockJS from "sockjs-client";
import { over } from "stompjs";
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

interface MessagePayload {
  senderId: string;
  senderName?: string;
  receiverId: string;
  message: string;
}

const sock = new SockJS("http://localhost:8888/ws");
const stompClient = over(sock);

export default function ChatWindow() {
  const [joinRoomForm] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chatList, setChatList] = useState<MessageProps[]>([]);
  const [chatInfo, setChatInfo] = useState<ChatInfo>();
  const [message, setMessage] = useState<string>("");
  const [chatRoomId, setChatRoomId] = useState<string>("");
  const { value, action } = useContext(AppContext);
  const chatDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    stompClient.connect(
      {},
      () => {
        console.log("websocket connected!");
      },
      (error: any) => console.log("connect websocket error: ", error)
    );
  }, []);

  const handleAddMember = async () => {
    try {
      const createJoinRequest: JoinRoomRequest = {
        roomId: value?.selectedItemId,
        usernames: joinRoomForm.getFieldValue("members"),
      };

      console.log("create room request: ", createJoinRequest);

      await JoinRoomAdd(createJoinRequest);
      action?.showMessage?.("success", "Add members successfully!");
      setIsModalOpen(false);
    } catch (error) {
      action?.showMessage?.("error", "Cannot Add members ");
    }
    setIsModalOpen(false);
  };

  const handleCancelModal = () => {
    axios.CancelToken.source().cancel();
    setIsModalOpen(false);
  };

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

        stompClient.unsubscribe(`/chatroom/${chatRoomId}`);
        setChatRoomId(data.id);

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

  useEffect(() => {
    if (!chatRoomId) return;
    stompClient.subscribe(`/chatroom/${chatRoomId}`, onReceiveMessage);
    console.log("subscribe to chatroom: ", `/chatroom/${chatRoomId}`);
  }, [chatRoomId]);

  const handleSendMessage = () => {
    if (!message) return;
    try {
      const sendMessageRequest: MessagePayload = {
        senderId: value?.user?.id || "",
        receiverId: value?.selectedItemId || "",
        message: message,
      };

      setMessage("");

      stompClient.send(
        "/app/group-chat",
        {},
        JSON.stringify(sendMessageRequest)
      );
    } catch (error) {
      console.log("Send message error: ", error);
    }
  };

  useEffect(() => {
    console.log("new chat");
    console.log(chatDivRef.current);
  }, [chatList]);

  const onReceiveMessage = (payload: any) => {
    const msg: MessagePayload = JSON.parse(payload.body);

    setChatList((prev) => [
      ...prev,
      {
        senderId: msg.senderId,
        senderName: msg.senderName || "username",
        message: msg.message,
      },
    ]);
  };

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
                onClick={() => setIsModalOpen(true)}
                style={{
                  marginLeft: "100px",
                  fontSize: "24px",
                  transition: "color 0.3s",
                }}
              />
            </Col>
          </Row>

          <div
            ref={chatDivRef}
            style={{
              overflow: "auto",
              maxHeight: "80vh",
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
                  isOwner={String(item.senderId) === String(value.user?.id)}
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
              <Input
                placeholder="Type a message"
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
                onPressEnter={handleSendMessage}
                value={message}
              />
            </Col>
            <Col
              span={3}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                className="button"
                type="primary"
                onClick={handleSendMessage}
              >
                Send
                <SendOutlined />
              </Button>
            </Col>
          </Row>
        </>
      )}

      <JoinRoomModal
        open={isModalOpen}
        onOk={handleAddMember}
        onCancel={handleCancelModal}
        form={joinRoomForm}
      />
    </div>
  );
}
