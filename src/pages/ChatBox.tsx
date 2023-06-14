import { useContext, useEffect, useRef, useState } from "react";
import { Layout } from "antd";
import { useParams } from "react-router-dom";
import ChatWindow from "./Home/ChatWindow";
import SideBar from "../components/SideBar/SideBar";
import { MenuItem } from "../types/Home";
import SockJS from "sockjs-client";
import { over } from "stompjs";
import { SERVER_URL } from "../apis/constant";
import { AppContext, ContextValue } from "../context/app.context";
import { User } from "../types/User";
import { getUserInfor } from "../apis/user.api";
import { GetMemberList } from "../apis/room.api";
import { GetChatHistory } from "../apis/chat.api";

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

export interface HomeContextProps {
  HandleLogout?: () => void;
  HandleAddFriend?: () => void;
  HandleAddGroup?: () => void;
  UserList?: MenuItem[];
  GroupList?: MenuItem[];
  selectedItem?: MenuItem;
}

const sock = new SockJS(`${SERVER_URL}/ws`);
const stompClient = over(sock);

const ChatBox = () => {
  const params = useParams();
  const roomId = params.id;
  const [members, setMembers] = useState<User[]>([]);
  const { value, action } = useContext(AppContext);
  const [chatList, setChatList] = useState<MessageProps[]>([]);
  const [chatInfo, setChatInfo] = useState<ChatInfo>();
  const [message, setMessage] = useState<string>("");

  const fetchSideBarData = useRef<any>();
  const fetchChatRoom = useRef<any>();

  useEffect(() => {
    const roomId = params.id;
    if (!roomId) return;

    stompClient.connect(
      {},
      async () => {
        console.log("websocket connected!");

        stompClient.subscribe(`/chatroom/${roomId}`, onReceiveMessage);
        console.log("subscribe to chatroom: ", `/chatroom/${roomId}`);

        let userId = value?.user?.id;

        if (!userId) {
          const userInfo = await getUserInfor();
          userId = userInfo.data.id;
        }

        stompClient.subscribe(`/chatroom/public`, (payload: any) => {
          const msg: MessagePayload = JSON.parse(payload.body);
          if (msg.senderId == userId) return;
          if (msg.message == "I am here!") {
            if (!members) return;

            setMembers((prev) => {
              const updatedMembers = [...prev];
              const index = updatedMembers.findIndex(
                (item) => item.id == msg.senderId
              );
              if (index > -1) {
                updatedMembers[index].isOnline = true;
              }
              return updatedMembers;
            });
          }
          if (!userId) return;
          if (msg.message == "are you there?") {
            console.warn(msg.senderId, msg.message);
            msg.senderId = userId;
            msg.message = "I am here!";
            stompClient.send(`/chatroom/public`, {}, JSON.stringify(msg));
          }
        });

        setInterval(() => {
          if (!userId) return;

          const initMsg: MessagePayload = {
            senderId: userId,
            receiverId: "all",
            message: "are you there?",
          };

          stompClient.send("/app/message", {}, JSON.stringify(initMsg));
        }, 1000);
      },
      (error: any) => {
        console.log("connect websocket error: ", error);
      }
    );

    try {
      fetchSideBarData.current = async () => {
        const profile = await getUserInfor();
        const memberListRes = await GetMemberList(roomId);

        const memberList = memberListRes.data.filter(
          (item) => item.id != profile.data.id
        );

        const userInfo: ContextValue["user"] = {
          id: profile.data.id,
          name: profile.data.fullName,
          email: profile.data.email,
        };

        action?.setUserInfo?.(userInfo);
        setMembers(memberList);
      };
      fetchChatRoom.current = async () => {
        const chatHistory = await GetChatHistory(roomId);

        const { data } = chatHistory;

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
          ownerId: data.ownerId,
        });
      };

      fetchChatRoom.current();
      fetchSideBarData.current();
    } catch (error) {
      action?.showMessage?.("error", "Cannot fetch data!");
    }
  }, []);

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

  const handleSendMessage = () => {
    if (!message) return;
    try {
      const sendMessageRequest: MessagePayload = {
        senderId: value?.user?.id || "",
        receiverId: roomId || "",
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

  return (
    <Layout hasSider style={{ backgroundColor: "#fff" }}>
      <SideBar roomId={params.id} members={members} />
      <ChatWindow
        roomId={params.id}
        stompClient={stompClient}
        handleSendMessage={handleSendMessage}
        setMessage={setMessage}
        chatInfo={chatInfo}
        chatList={chatList}
        message={message}
        fetchSiderBarData={fetchSideBarData.current}
      />
    </Layout>
  );
};

export default ChatBox;
