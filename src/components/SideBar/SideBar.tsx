import { Avatar, Col, Layout, Row, Typography, Space, Badge } from "antd";
import Logo from "./Logo";
import styled from "styled-components";
import React, { useEffect } from "react";
import { AppContext } from "../../context/app.context";
import { User } from "../../types/User";

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

interface SideBarProps {
  roomId: any;
  members: User[];
}

export default function SideBar({ members }: SideBarProps) {
  const { value } = React.useContext(AppContext);

  useEffect(() => {
    console.log(members);
  }, [members]);

  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        left: 0,
        top: 0,
        bottom: 0,
        borderRight: "3px solid #bcbcbc",
      }}
      width={"25vw"}
      theme="light"
    >
      <Logo />
      <hr style={{ width: "55%", marginBottom: "10px" }}></hr>
      <StyledRow justify="center" align="middle">
        <Col span={6} className="avatar-col">
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

      <div style={{ width: "fit-content", margin: "0 auto" }}>
        <Typography.Text
          strong
          style={{
            fontSize: "20px",
          }}
        >
          Thành viên nhóm
        </Typography.Text>
      </div>

      <Space
        direction="vertical"
        style={{ width: "80%", marginLeft: "20px", marginTop: "10px" }}
        align="start"
      >
        {members.map((member) => {
          const { id, fullName, username } = member;

          return (
            <Row key={id}>
              <Col>
                <Badge
                  color={member.isOnline === true ? "green" : "gray"}
                  dot
                  offset={[-5, 30]}
                  style={{ width: "25%", height: "25%" }}
                >
                  <Avatar size={35}>
                    {username && username[0].toUpperCase()}
                  </Avatar>
                </Badge>
              </Col>
              <Col style={{ marginLeft: "15px" }}>
                <Typography.Text strong>{username}</Typography.Text>
                <br />
                <Typography.Text>{fullName}</Typography.Text>
              </Col>
            </Row>
          );
        })}
      </Space>
    </Sider>
  );
}
