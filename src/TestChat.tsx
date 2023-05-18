import React, { useEffect, useRef } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { Client } from "stompjs";

const sock = new SockJS("http://localhost:8888/ws");
const stompClient = over(sock);

const TestChat = () => {
  const groupId = useRef<string>("public");
  const userName = useRef<string>("Ngo Hiep");
  const chatList = useRef<HTMLUListElement>(null);
  const [chatMessages, setChatMessages] = React.useState<string>();

  useEffect(() => {
    try {
      stompClient.connect(
        {},
        () => onConnected(stompClient),
        (error: any) => console.log(error)
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onConnected = (stompClient: Client) => {
    console.log("connected");
    stompClient.subscribe("/chatroom/public", onReceiveMessage);
    const initMsg = {
      sender: "Browser",
      receiver: "public",
      message: "Hello",
    };
    stompClient.send("/app/message", {}, JSON.stringify(initMsg));

    groupId.current = prompt("Enter group id") || "public";
    userName.current = prompt("Enter user name") || "Ngo Hiep";

    const joinMsg = {
      sender: "Browser",
      receiver: groupId.current,
      message: "Join room",
    };
    stompClient.subscribe(`/chatroom/${groupId.current}`, onReceiveMessage);
    stompClient.send("/app/group-chat", {}, JSON.stringify(joinMsg));
  };

  const onReceiveMessage = (payload: any) => {
    const message = JSON.parse(payload.body);

    const li = document.createElement("li");
    li.innerHTML = `${message.sender}: ${message.message}`;
    chatList.current?.appendChild(li);
  };

  const handleChat = () => {
    const chatMsg = {
      sender: userName.current,
      receiver: groupId.current,
      message: chatMessages,
    };
    stompClient.send("/app/group-chat", {}, JSON.stringify(chatMsg));
  };

  return (
    <>
      <ul ref={chatList}></ul>
      <input
        type="text"
        placeholder="Enter chat message"
        onChange={(event) => {
          setChatMessages(event.target.value);
        }}
      />
      <button onClick={handleChat}>Send</button>
    </>
  );
};

export default TestChat;
