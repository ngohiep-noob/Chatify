import { Avatar, Button, Col, Form, Row, Space, Typography } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../../components/SideBar/Logo";
import {
  CreateRoom,
  CreateRoomRequest,
  getRoomList,
} from "../../apis/room.api";
import { getUserInfor } from "../../apis/user.api";
import { AppContext, ContextValue } from "../../context/app.context";
import { MenuItem } from "../../types/Home";
import ListItem from "../../components/SideBar/ListItem";
import { LogoutOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import axios from "axios";
import { CreateRoomModal } from "../../components/SideBar/CreateRoomModal";

const { Text } = Typography;

const RoomList = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { value, action } = React.useContext(AppContext);
  const handleFetchData = useRef<any>();

  useEffect(() => {
    try {
      handleFetchData.current = async () => {
        const roomList = await getRoomList();

        const menuItemList: MenuItem[] = roomList.data.map((room) => ({
          id: room.id,
          name: room.name,
          lastMessage: room.lastMessage?.message || "",
          lastMessageTime: room.lastMessage?.createdAt || "",
          lastChattingUsername: room.lastMessage?.user?.username || "",
        }));

        action?.setRoomList?.(menuItemList);

        const profile = await getUserInfor();

        const userInfo: ContextValue["user"] = {
          id: profile.data.id,
          name: profile.data.fullName,
          email: profile.data.email,
        };

        action?.setUserInfo?.(userInfo);
      };

      handleFetchData.current();
    } catch (error) {
      action?.showMessage?.("error", "Cannot fetch user info!");
    }
  }, []);

  const handleOk = async () => {
    setLoading(true);
    try {
      const createRoomReq: CreateRoomRequest = {
        name: form.getFieldValue("name"),
        desc: form.getFieldValue("description"),
        memberNames: form.getFieldValue("members"),
      };

      await CreateRoom(createRoomReq);

      setIsModalOpen(false);
      setLoading(false);
      action?.showMessage?.("success", "Tạo phòng thành công!");
    } catch (error) {
      action?.showMessage?.("error", "Có lỗi khi tạo phòng!");
      setLoading(false);
    }

    await handleFetchData.current();
  };

  const handleCancel = () => {
    axios.CancelToken.source().cancel();
    setIsModalOpen(false);
  };

  return (
    <div>
      <Logo />
      <hr style={{ width: "55%", marginBottom: "3vh" }}></hr>
      <Row
        justify="center"
        align="middle"
        style={{ width: "70%", margin: "0 auto", marginBottom: "5vh" }}
      >
        <Col className="avatar-col" style={{ marginRight: "20px" }}>
          <Avatar size={45}>
            <span
              style={{
                color: "#fff",
                fontSize: "20px",
              }}
            >
              {value?.user?.name[0]?.toUpperCase()}
            </span>
          </Avatar>
        </Col>
        <Col style={{ marginRight: "40px" }}>
          <Text strong style={{ fontSize: "17px" }}>
            {value?.user?.name}
          </Text>
          <br />
          <Text type="secondary">{value?.user?.email}</Text>
        </Col>

        <Col style={{ marginLeft: "10px" }}>
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            <UsergroupAddOutlined />
          </Button>
        </Col>
        <Col style={{ marginLeft: "10px" }}>
          <Button
            danger
            type="primary"
            onClick={action?.HandleLogout}
            loading={loading}
          >
            <LogoutOutlined />
          </Button>
        </Col>
      </Row>

      <div
        style={{
          backgroundColor: "#ecf0f1",
          width: "40%",

          margin: "0 auto",
          padding: "15px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text strong style={{ fontSize: "25px", marginBottom: "10px" }}>
          Danh sách phòng chat
        </Text>
        <Space direction="vertical">
          {value?.roomList &&
            value.roomList.map((item, idx) => <ListItem {...item} key={idx} />)}
        </Space>
      </div>

      <CreateRoomModal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        form={form}
      />
    </div>
  );
};

export default RoomList;
