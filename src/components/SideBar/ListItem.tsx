import { Avatar, Space, Typography } from "antd";
import { MenuItem } from "../../types/Home";
import dayjs from "dayjs";
import { useState } from "react";
import { TeamOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function ListItem({
  name,
  lastChattingUsername,
  lastMessageTime,
  lastMessage,
  id,
}: MenuItem) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link to={`/chat-box/${id}`} target='_blank'>
      <Space
        direction="horizontal"
        style={{
          backgroundColor: isHover ? "#d1e7ed" : "",
          padding: "10px",
          borderRadius: "10px",
          transition: "all 0.5s",
          width: "100%",
          cursor: "pointer",
        }}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        <Avatar icon={<TeamOutlined />} size={40}></Avatar>

        <div style={{ marginRight: "40px" }}>
          <Typography.Text strong>{name}</Typography.Text> <br />
          <Typography.Text>
            {lastMessage ? (
              <>
                <b>{lastChattingUsername}:</b> <span>{lastMessage}</span>{" "}
                <Typography.Text type="secondary">
                  (
                  {lastMessageTime
                    ? dayjs(lastMessageTime).format("HH:mm A")
                    : ""}
                  )
                </Typography.Text>
              </>
            ) : (
              <i>phòng vừa được tạo</i>
            )}
          </Typography.Text>
        </div>
      </Space>
    </Link>
  );
}
