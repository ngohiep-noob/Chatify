import React from "react";
import styled from "styled-components";
import { Avatar, Typography, Row, Col, Space } from "antd";
const { Text } = Typography;

const StyledRow = styled(Row)`
  .avatar-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .avatar-img {
    width: fit-content;
  }
  .details-col {
    height: 50%;
  }
`;

export default function UserInfo() {
  return (
    <StyledRow justify="center" >
      <Col span={7} className="avatar-col">
        <Avatar
          className="avatar-img"
          size={50}
          src="https://i.pinimg.com/originals/e1/ed/eb/e1edeb6d3f086b74b0f33be6e665c10f.jpg"
        ></Avatar>
      </Col>
      <Col span={17} className="details-col">
        <Text strong>Nguyễn Chánh Nghĩa</Text> <br />
        <Text type="secondary" className="gmail">
          nguyenchanhnghia2917@gmail.com
        </Text>
      </Col>
    </StyledRow>
  );
}
