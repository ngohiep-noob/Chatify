import styled from "styled-components";
import { WechatOutlined } from "@ant-design/icons";
import { Space, Typography } from "antd";

const StyledSpace = styled(Space)`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;

  .img {
    font-size: 40px;
    display: inline-block;
    margin-right: 10px;
  }

  .text {
    margin: 0;
    display: block;
  }
`;

export default function Logo() {
  return (
    <StyledSpace align="center" direction="vertical">
      <Typography.Title className="text">
        <WechatOutlined className="img" />
        Chatify
      </Typography.Title>
    </StyledSpace>
  );
}
