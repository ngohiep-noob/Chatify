import React from "react";
import { Avatar, Typography } from "antd";
import styled from "styled-components";
const DivStyled = styled.div`
  .name {
    position: absolute;
    top: 0px;
    left: 50px;
    font-family: Epilogue;
    font-size: 15px;
    color: #171a1fff; /* neutral-900 */
  }
  .gmail {
    position: absolute;
    top: 20px;
    left: 50px;
    font-size: 12px;
    color: #171a1fff; /* neutral-900 */
  }
  .Avata {
    position: absolute;
    top: 3px;
    left: 5px;
    font-size: 17px;
  }
  .Time {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 12px;
  }
`;

export default function ListItem() {
  return (
    <DivStyled>
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
    </DivStyled>
  );
}
