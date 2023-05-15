import styled from "styled-components";
import { WechatOutlined } from "@ant-design/icons";
import { Divider, Typography } from "antd";

const { Title } = Typography;

const Logostyle = styled.div`
  .text {
    position: absolute;
    top: 30px;
    left: 82px;
    width: 145px;
    font-family: Inter; /* Body */
    font-size: 40px;
    line-height: 56px;
    color: #171a1fff; /* neutral-900 */
  }
  .logo {
    position: absolute;
    top: 32px;
    left: 32px;
    width: 38px;
    height: 38px;
    font-size: 45px;
    fill: #171a1fff;
  }
`;

export default function Logoo() {
  return (
    <Logostyle>
      <div className="logo">
        <WechatOutlined />
      </div>
      <Typography.Title>Chatify</Typography.Title>
    </Logostyle>
  );
}
