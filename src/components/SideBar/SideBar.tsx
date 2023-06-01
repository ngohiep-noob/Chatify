import {
  Avatar,
  Button,
  Col,
  Layout,
  Menu,
  Row,
  Typography,
  Modal,
  Input,
  Form,
} from "antd";
import Logo from "./Logo";
import ListItem from "./ListItem";
import {
  LogoutOutlined,
  TeamOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context/app.context";
import { getUserInfor } from "../../apis/user.api";
import { MenuItem } from "../../types/Home";
import { ContextValue } from "../../context/app.context";
import { CreateRoomModal } from "./CreateRoomModal";
import {
  CreateRoomRequest,
  CreateRoom,
  getRoomList,
} from "../../apis/room.api";
import axios from "axios";
const spanStyles = {
  color: '#fff', // Example text color
  fontSize: '25px', // Example font size
  fontWeight: 'bold',
};
const { Sider } = Layout;
const { Text } = Typography;

const StyledRow = styled(Row)`
  .avatar-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .details-col {
    height: 60%;
  }

  .gmail {
    font-size: 12px;
  }

  .name {
    font-size: 17px;
    font-family: Epilogue;
  }
`;

export default function SideBar() {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { value, action } = React.useContext(AppContext);
  const handleFetchData = useRef<any>();

  const handleOk = async () => {
    setLoading(true);
    try {
      const createRoomReq: CreateRoomRequest = {
        name: form.getFieldValue("name"),
        desc: form.getFieldValue("description"),
        memberNames: form.getFieldValue("members"),
      };

      console.log("create room request: ", createRoomReq);

      await CreateRoom(createRoomReq);
      action?.showMessage?.("success", "Create room successfully!");
      setIsModalOpen(false);
      setLoading(false);
    } catch (error) {
      action?.showMessage?.("error", "Cannot create room!");
      setLoading(false);
    }

    await handleFetchData.current();
  };

  const handleCancel = () => {
    axios.CancelToken.source().cancel();
    setIsModalOpen(false);
  };

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

  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      width={"25vw"}
      theme="light"
    >
      <Logo />
      <hr style={{ width: "55%", marginBottom: "10px" }}></hr>
      <StyledRow justify="center" align="middle">
        <Col span={6} className="avatar-col">
          <Avatar
            size={55}
            style={{ backgroundImage: 
              "url('https://wallpaperaccess.com/full/270177.jpg')",
               backgroundSize: 'cover' }}
          >
            <span style={spanStyles}>{(value?.user?.name[0])?.toUpperCase()}</span>
          </Avatar>
        </Col>
        <Col span={18} className="details-col">
          <Text strong className="name">
            {value?.user?.name}
          </Text>
          <br />
          <Text type="secondary" className="gmail">
            {value?.user?.email}
          </Text>
        </Col>

        <hr
          style={{
            width: "90%",
            marginBottom: "20px",
            marginTop: "10px",
            color: "#27AEF2 ",
          }}
        ></hr>
      </StyledRow>

      <Row
        style={{ width: "75%", margin: "0 auto" }}
        align="middle"
        justify="space-evenly"
      >
        <Col span={5}>
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            <UsergroupAddOutlined />
          </Button>
        </Col>
        <Col span={5}>
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

      <Menu
        className="menu"
        mode="inline"
        items={[
          {
            key: "room",
            icon: <TeamOutlined />,
            label: "Chat rooms",
            children: value?.roomList
              ? value.roomList.map((item) => ({
                  key: item.id,
                  label: <ListItem {...item} />,
                }))
              : [],
          },
        ]}
        onSelect={(item) => {
          const { key } = item;
          if (action?.setSelectedItem) action?.setSelectedItem(key as string);
        }}
      />
      <CreateRoomModal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        form={form}
      />
    </Sider>
  );
}
