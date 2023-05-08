import React from "react";
import { Menu, MenuProps} from "antd";
import {  TeamOutlined, UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Avata from "./avata";
const siderItems: MenuProps["items"] = [
    {
      key: "chat-group",
      icon: <TeamOutlined />,
      label: "Chat Group",
      children: [
        <Avata />,
        <Avata />,
        <Avata />,
        <Avata />,
        <Avata />,
        
        "chat-group-5",
      ].map((name, i) => ({ key: "gr-" + i + 1, label: name })),
    },
    {
      key: "chat-friends",
      icon: <UserOutlined />,
      label: "Friends",
      children: [
        "friend-1",
        "friend-2",
        "friend-3",
        "friend-4",
      
      ].map((name, i) => ({ key: "fr-" + i + 1, label: name })),
    },
  ];
const MennuStyle=styled.div`
.menu{ 
    left: 200px;
 
}
.ant-menu-light.ant-menu-inline .ant-menu-sub.ant-menu-inline {
  background: rgba(0, 255, 255, 0);
}
`
export default function Chatgroup(){
    return(
      <MennuStyle><div>
      <Menu className="menu"
      mode="inline"
      defaultSelectedKeys={["2"]}
      items={siderItems}
      
    />
  </div></MennuStyle>
        
    )
}