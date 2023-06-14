import { Avatar, Button, Col, Empty, Input, Row, Typography, Form } from "antd";
import {
  SendOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { JoinRoomModal as JoinRoomModal } from "../../components/SideBar/JoinRoomModal";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context/app.context";
import Message from "../../components/MainChat/Message";

import { JoinRoomRequest, JoinRoom } from "../../apis/room.api";
import axios from "axios";
import { Client } from "stompjs";

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

interface ChatWindowProps {
  roomId: any;
  stompClient: Client;
  setMessage: (message: string) => void;
  handleSendMessage: () => void;
  chatInfo: ChatInfo | undefined;
  chatList: MessageProps[] | undefined;
  message: string;
  fetchSiderBarData: () => void;
}

export default function ChatWindow({
  roomId,
  chatInfo,
  setMessage,
  handleSendMessage,
  chatList,
  message,
  fetchSiderBarData,
}: ChatWindowProps) {
  const [joinRoomForm] = Form.useForm();
  const [openAddModal, setOpenAddModal] = useState(false);
  const { value, action } = useContext(AppContext);
  const chatWindowRef = useRef<any>(null);

  const handleAddMember = async () => {
    try {
      const createJoinRequest: JoinRoomRequest = {
        roomId: roomId,
        usernames: joinRoomForm.getFieldValue("members"),
      };

      await JoinRoom(createJoinRequest);

      setOpenAddModal(false);
      fetchSiderBarData();
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
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [chatList]);

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {!roomId && (
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
      {roomId && (
        <>
          <Row
            style={{ height: "10vh", borderBottom: "1px solid #dddddd" }}
            align="middle"
          >
            <Col
              span={2}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar size={40} icon={<TeamOutlined />}></Avatar>
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
                {`${chatInfo?.desc || ""}`}
              </Typography.Text>
            </Col>

            {chatInfo?.ownerId === value?.user?.id && (
              <Col>
                <Button
                  onClick={() => {
                    setOpenAddModal(true);
                  }}
                >
                  Thêm thành viên mới
                </Button>
              </Col>
            )}
          </Row>

          {chatList && (
            <div
              style={{
                overflow: "auto",
                height: "80vh",
                padding: "10px",
                width: "100%",
                backgroundColor: "#FFF",
                scrollBehavior: "smooth",
              }}
              ref={chatWindowRef}
            >
              {chatList.map((item, index) => {
                return (
                  <Message
                    text={item.message}
                    displayName={item.senderName}
                    isOwner={String(item.senderId) === String(value?.user?.id)}
                    key={index}
                  ></Message>
                );
              })}
            </div>
          )}
          <Row
            justify="space-between"
            align="middle"
            style={{
              padding: "10px",
              height: "10vh",
              borderTop: "1px solid #ddd",
            }}
          >
            <Col span={21}>
              <Input
                placeholder="Type a message"
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
                onPressEnter={handleSendMessage}
                style={{ borderRadius: "20px" }}
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
                style={{
                  borderRadius: "20px",
                }}
              >
                Gửi
                <SendOutlined />
              </Button>
            </Col>
          </Row>
        </>
      )}

      <JoinRoomModal
        open={openAddModal}
        onOk={handleAddMember}
        onCancel={handleCancelModal}
        form={joinRoomForm}
      />
    </div>
  );
}
