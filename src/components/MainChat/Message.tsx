import { Avatar, Col, Row, Typography } from "antd";
import styled from "styled-components";

const MessageStyle = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  .owner-msg {
    background-color: #128bfd;
    color: #fff;
    border-radius: 20px;
    margin-right: 10px;
    padding: 10px 20px;
  }

  .guest-msg {
    background-color: #ededed;
    color: #000000;
    border-radius: 20px;
    margin-left: 10px;
    padding: 10px 20px;
  }
`;

export interface MessageProps {
  text: string;
  displayName: string;

  isOwner: boolean;
}

export default function Message({ text, displayName, isOwner }: MessageProps) {
  return (
    <MessageStyle>
      <Row align="middle" justify={isOwner ? "end" : "start"}>
        {isOwner && (
          <Col>
            <Typography.Text className="owner-msg">{text}</Typography.Text>
          </Col>
        )}
        <Col>
          <div
            className="messageInfo"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar size={40}>{displayName[0].toUpperCase()}</Avatar>
            <span style={{ fontSize: "11px" }}>{displayName}</span>
          </div>
        </Col>
        {!isOwner && (
          <Col>
            <Typography.Text className="guest-msg">{text}</Typography.Text>
          </Col>
        )}
      </Row>
    </MessageStyle>
  );
}
