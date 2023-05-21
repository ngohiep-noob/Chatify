import React from "react";
import {
  LogoutOutlined,
  PhoneOutlined,
  PhoneTwoTone,
  MailTwoTone,
} from "@ant-design/icons";
import { Row, Col, Avatar, Typography, Image } from "antd";
import styled from "styled-components";
const Inforstyle = styled.div`
  //background: #B2F6BF;

  .sdt {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1px;
    margin-right: 6px;
    font-size: 20px;
  }
  .name {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-family: Epilogue; /* Body */
  }
  .mail {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ant-image-mask {
    background: rgb(0 0 0 / 0%);
  }
  .line {
    width: 70%;
    margin: 0 auto;
  }
`;
export default function Infor() {
  return (
    <Inforstyle>
      <Avatar
        className="logoAva"
        src="https://i.pinimg.com/originals/e1/ed/eb/e1edeb6d3f086b74b0f33be6e665c10f.jpg"
      ></Avatar>

      <Typography className="name">Nguyễn Chánh Nghĩa</Typography>
      <Typography className="sdt">
        <PhoneTwoTone className="icon"></PhoneTwoTone>
        0363292917
      </Typography>
      <Typography className="mail">
        <MailTwoTone className="icon"></MailTwoTone>
        nguyenchanhnghia2917@gmail.com
      </Typography>
      <div className="line">
        <hr />
      </div>
    </Inforstyle>
  );
}
