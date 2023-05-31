import React from "react";
import { Menu, MenuProps } from "antd";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import ListItem from "./ListItem";

const siderItems: MenuProps["items"] = [
  {
    key: "chat-group",
    icon: <TeamOutlined />,
    label: "Chat Group",
    children: [
      <ListItem />,
      <ListItem />,
      <ListItem />,
      <ListItem />,
      <ListItem />,

      "chat-group-5",
    ].map((name, i) => ({ key: "gr-" + i + 1, label: name })),
  },
  {
    key: "chat-friends",
    icon: <UserOutlined />,
    label: "Friends",
    children: ["friend-1", "friend-2", "friend-3", "friend-4"].map(
      (name, i) => ({ key: "fr-" + i + 1, label: name })
    ),
  },
];
const MennuStyle = styled.div`
  width: 100%;
`;
export default function ChatList() {
  return (
    <MennuStyle>
      <Menu
        className="menu"
        mode="inline"
        defaultSelectedKeys={["2"]}
        items={siderItems}
      />
    </MennuStyle>
  );
}
