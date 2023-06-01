import {
  Avatar,
  Button,
  Col,
  Empty,
  Input,
  Row,
  Typography,
  Form,
  Space,
} from "antd";
import {
  OrderedListOutlined,
  SendOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { JoinRoomModal as JoinRoomModal } from "../../components/SideBar/JoinRoomModal";
import { createRef, useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context/app.context";
import Message from "../../components/MainChat/Message";
import { GetChatHistory } from "../../apis/chat.api";
import { JoinRoomRequest, JoinRoom, GetMemberList } from "../../apis/room.api";
import axios from "axios";
import SockJS from "sockjs-client";
import { over } from "stompjs";
import { SERVER_URL } from "../../apis/constant";
import { User } from "../../types/User";
import { MemberListModal } from "../../components/MainChat/MemberListModal";
interface MessageProps {
  senderId: string;
  senderName: string;
  message: string;
}

interface ChatInfo {
  name: string;
  desc: string;
  memberCount: number;
  ownerId?: string;
}

interface MessagePayload {
  senderId: string;
  senderName?: string;
  receiverId: string;
  message: string;
}

const sock = new SockJS(`${SERVER_URL}/ws`);
const stompClient = over(sock);

export default function ChatWindow() {
  const [joinRoomForm] = Form.useForm();
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openMemberListModal, setOpenMemberListModal] = useState(false);

  const [chatList, setChatList] = useState<MessageProps[]>([]);
  const [chatInfo, setChatInfo] = useState<ChatInfo>();
  const [message, setMessage] = useState<string>("");
  const [chatRoomId, setChatRoomId] = useState<string>("");
  const [members, setMembers] = useState<User[]>([]);
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

      await JoinRoom(createJoinRequest);
      action?.showMessage?.("success", "Add members successfully!");

      const memberListRes = await GetMemberList(value?.selectedItemId || "");
      setMembers(memberListRes.data);

      setOpenAddModal(false);
    } catch (error) {
      action?.showMessage?.("error", "Cannot Add members ");
    }
    setOpenAddModal(false);
  };

  const handleCancelModal = () => {
    axios.CancelToken.source().cancel();
    setOpenAddModal(false);
  };

  useEffect(() => {
    try {
      if (!value?.selectedItemId) return;

      (async () => {
        const chatHistory = await GetChatHistory(value?.selectedItemId || "");
        const memberListRes = await GetMemberList(value?.selectedItemId || "");

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

        setMembers(memberListRes.data);

        setChatInfo({
          name: data.name,
          desc: data.desc,
          memberCount: data.memberCount,
          ownerId: data.ownerId,
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
                style={{ backgroundImage: 
                  "url('https://img.freepik.com/free-photo/green-sofa-white-living-room-with-free-space_43614-834.jpg?w=2000')",
                   backgroundSize: 'cover' }}
              ></Avatar>
            </Col>

            <Col span={16}>
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
                } Members`}
              </Typography.Text>
            </Col>

            <Col span={3}>
              <Button onClick={() => setOpenMemberListModal(true)}>
                Thành viên
              </Button>
            </Col>
            {chatInfo?.ownerId === value?.user?.id && (
              <Col span={3}>
                <Button onClick={() => setOpenAddModal(true)}>
                  Thêm mới
                </Button>
              </Col>
            )}
          </Row>

          <div
            ref={chatDivRef}
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
                Gửi
                <SendOutlined />
              </Button>
            </Col>
          </Row>
        </>
      )}

      <MemberListModal
        open={openMemberListModal}
        members={members}
        ownerId={chatInfo?.ownerId}
        onClose={() => setOpenMemberListModal(false)}
      />

      <JoinRoomModal
        open={openAddModal}
        onOk={handleAddMember}
        onCancel={handleCancelModal}
        form={joinRoomForm}
      />
    </div>
  );
}
