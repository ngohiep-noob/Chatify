import { Avatar,Divider,Tooltip, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import {  TeamOutlined, UserOutlined ,CheckCircleTwoTone,AntDesignOutlined} from "@ant-design/icons";
const Headerstyle=styled.div`
display: flex;
justify-content: space-between;
.header{

    &_avatar { 
        width: 70px; 
        height: 70px; 
        background: 0; /* secondary-200 */
        opacity: 1; 
        overflow: hidden; 
        border-radius: 40px; 
      }
      &_avatar img {
        width: 70px; 
        height: 70px; 
      }
      &_avatar .badge {
        width: 16px; 
        height: 16px; 
        border-radius: 8px; 
      }
      &_name{
        margin-top: 12px;
        margin-left: 6px;
        font-family: Epilogue; /* Heading */
         font-size: 24px; 
        color: #171A1FFF; /* neutral-900 */
      }
      &_Ative{
        margin-left: 6px;
      }
.group{
}
}

`

export default function Header(){
    return(
        
        <Headerstyle>
            <div>
                <Avatar className="header_avatar" src="https://i.pinimg.com/originals/e1/ed/eb/e1edeb6d3f086b74b0f33be6e665c10f.jpg"></Avatar></div>
        
        <div>
            <Typography className="header_name">Huỳnh Hoàng Khánh</Typography >
            <CheckCircleTwoTone className="header_Ative" twoToneColor="#52c41a" />
            <span className="header_Ative">Active now</span>
            
        </div>
    <div>
    <Avatar.Group
      maxCount={2}
      size="large"
      maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
    >
      <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
      <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Tooltip>
      <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
    </Avatar.Group>
 
    </div>
    
        </Headerstyle>
    )
}