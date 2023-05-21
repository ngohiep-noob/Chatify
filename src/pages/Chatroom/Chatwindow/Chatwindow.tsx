import React from "react";
import styled from "styled-components";

import {
  Avatar,
  Button,
  Col,
  Input,
  Row,
  Space,
  Tooltip,
  Typography,
} from "antd";
import {
  AntDesignOutlined,
  CheckCircleTwoTone,
  EditTwoTone,
  InstagramFilled,
  UserOutlined,
} from "@ant-design/icons";
import Message from "./message";

const Senttstyle = styled.div`
  height: 5vh;
  margin-top: 2%;
  display: flex;
  justify-content: center;
  .input {
    background: #f3f4f6ff;
    width: 80%;

    height: 35px;
    border-radius: 0px;
    border-width: 0px;
  }
  .input input {
    width: 95%;
    font-size: 14px;
    background: #f3f4f6ff; /* neutral-200 */
    border-radius: 0px; /* border-m */
    border-width: 0px;
    outline: none;
  }
  .icon {
    font-size: 20px;
  }
  .button {
    margin-left: 40px;
  }
  .ant-btn {
    color: #ffffffff; /* white */
    background: #00bdd6ff; /* primary-500 */
  }
`;

export default function ChatWindow() {
  return (
    <div style={{ width: "100%" }}>
      <Row style={{ height: "20vh" }}>
        <Col span={3}>
          <Avatar
            className="header_avatar"
            size={50}
            src="https://i.pinimg.com/originals/e1/ed/eb/e1edeb6d3f086b74b0f33be6e665c10f.jpg"
          ></Avatar>
        </Col>

        <Col span={16}>
          <Typography className="header_name">Huỳnh Hoàng Khánh</Typography>
          <CheckCircleTwoTone className="header_Ative" twoToneColor="#52c41a" />
          <span className="header_Ative">Active now</span>
        </Col>

        <Col>
          <Avatar.Group
            maxCount={2}
            maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
          >
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
            <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
            <Tooltip title="Ant User" placement="top">
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
            </Tooltip>
            <Avatar
              style={{ backgroundColor: "#1890ff" }}
              icon={<AntDesignOutlined />}
            />
          </Avatar.Group>
        </Col>
      </Row>

      <div style={{ overflow: "auto", height: "70vh" }}>
        <Message
          text="Hiep an cuc dung ko"
          photoUrl={
            "https://i.pinimg.com/originals/e1/ed/eb/e1edeb6d3f086b74b0f33be6e665c10f.jpg"
          }
          displayName="Hưng"
          time={"owner"}
        ></Message>
        <Message
          text="Dung luon r"
          photoUrl={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-bE2XzO5Am6y00usHjwkBtgKZTlws8N8pGA&usqp=CAU"
          }
          displayName="Khánh"
          time={"message"}
        ></Message>
        <Message
          text="Tuyet"
          photoUrl={
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc69be9e-1259-4f9b-94a8-5cf9dc3eb0e8/d89bqwy-8a184619-86b6-4065-bcd4-99d36741f3f2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjNjliZTllLTEyNTktNGY5Yi05NGE4LTVjZjlkYzNlYjBlOFwvZDg5YnF3eS04YTE4NDYxOS04NmI2LTQwNjUtYmNkNC05OWQzNjc0MWYzZjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ct9floXErP-IZ-0CKEimya_Z25XzDTV-7qitPlGuVBs"
          }
          displayName="Hoàng"
          time={"message"}
        ></Message>
        <Message
          text="Hiep an cuc dung ko"
          photoUrl={
            "https://i.pinimg.com/originals/e1/ed/eb/e1edeb6d3f086b74b0f33be6e665c10f.jpg"
          }
          displayName="Hưng"
          time={"owner"}
        ></Message>
        <Message
          text="Dung luon r"
          photoUrl={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-bE2XzO5Am6y00usHjwkBtgKZTlws8N8pGA&usqp=CAU"
          }
          displayName="Khánh"
          time={"message"}
        ></Message>
        <Message
          text="Tuyet"
          photoUrl={
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc69be9e-1259-4f9b-94a8-5cf9dc3eb0e8/d89bqwy-8a184619-86b6-4065-bcd4-99d36741f3f2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjNjliZTllLTEyNTktNGY5Yi05NGE4LTVjZjlkYzNlYjBlOFwvZDg5YnF3eS04YTE4NDYxOS04NmI2LTQwNjUtYmNkNC05OWQzNjc0MWYzZjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ct9floXErP-IZ-0CKEimya_Z25XzDTV-7qitPlGuVBs"
          }
          displayName="Hoàng"
          time={"message"}
        ></Message>
        <Message
          text="Hiep an cuc dung ko"
          photoUrl={
            "https://i.pinimg.com/originals/e1/ed/eb/e1edeb6d3f086b74b0f33be6e665c10f.jpg"
          }
          displayName="Hưng"
          time={"owner"}
        ></Message>
        <Message
          text="Dung luon r"
          photoUrl={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-bE2XzO5Am6y00usHjwkBtgKZTlws8N8pGA&usqp=CAU"
          }
          displayName="Khánh"
          time={"message"}
        ></Message>
        <Message
          text="Tuyet"
          photoUrl={
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc69be9e-1259-4f9b-94a8-5cf9dc3eb0e8/d89bqwy-8a184619-86b6-4065-bcd4-99d36741f3f2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjNjliZTllLTEyNTktNGY5Yi05NGE4LTVjZjlkYzNlYjBlOFwvZDg5YnF3eS04YTE4NDYxOS04NmI2LTQwNjUtYmNkNC05OWQzNjc0MWYzZjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ct9floXErP-IZ-0CKEimya_Z25XzDTV-7qitPlGuVBs"
          }
          displayName="Hoàng"
          time={"message"}
        ></Message>
      </div>

      <Senttstyle>
        <Input
          placeholder=" Type a message"
          prefix={<EditTwoTone className="icon" />}
          suffix={<InstagramFilled className="icon" />}
          className="input"
        />
        <Button className="button">Send</Button>
      </Senttstyle>
    </div>
  );
}
