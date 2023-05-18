import React from "react";
import { LogoutOutlined, UserAddOutlined } from "@ant-design/icons";
import { Avatar, Typography, Button } from "antd";
import styled from "styled-components";
const Avastyle = styled.div`
  display: flex;
  .name {
    position: absolute;
    top: 0px;
    left: 50px;
    font-family: Epilogue; /* Heading */
    font-size: 14px;
    line-height: 30px;
    color: #171a1fff; /* neutral-900 */
  }
  .gmail {
    position: absolute;
    top: 20px;
    left: 50px;
    font-size: 12px;
    line-height: 22px;
    color: #171a1fff; /* neutral-900 */
  }
  .Avata {
    position: absolute;
    top: 3px;
    left: 5px;
    width: 35px;
    height: 35px;
    font-size: 17px;
    line-height: 35px;
    border-radius: 40px;
  }
  .Time {
    position: absolute;
    top: 7px;
    left: 270px;
    font-size: 12px;
  }
`;

export default function UserItem() {
  return (
    <Avastyle>
      <div>
        <Avatar className="Avata">H</Avatar>
      </div>
      <div>
        <Typography.Text className="name" strong>
          Hoàng Khánh{" "}
        </Typography.Text>
        <Typography.Text className="gmail">You: Hello Cac ban</Typography.Text>
        <Typography.Text className="Time" type="secondary">
          0:00 AM
        </Typography.Text>
      </div>
    </Avastyle>
  );
}
