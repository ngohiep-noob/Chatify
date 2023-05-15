import { Row, Input, Button } from "antd";
import { SearchOutlined, CommentOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
const Inputstyle = styled.div`
  .input {
    background: #f3f4f6ff;
    width: 280px;
    left: 15px;
    height: 35px;
    border-radius: 2px;
    border-width: 0px;
  }
  .input input {
    width: 252px;
    font-size: 14px;
    background: #f3f4f6ff; /* neutral-200 */
    border-radius: 2px; /* border-m */
    border-width: 0px;
    outline: none;
  }
  .Comment {
    top: 2px;
    left: 30px;
    width: 35px;
    height: 35px;
    color: #ffffffff; /* white */
    background: #00bdd6ff; /* primary-500 */
    opacity: 1;
    border: none;
    border-radius: 4px; /* border-m */
  }
`;

export default function Search() {
  return (
    <Inputstyle>
      <Input
        placeholder="Search"
        prefix={<SearchOutlined />}
        className="input"
      />
      <Button icon={<CommentOutlined />} className="Comment"></Button>
    </Inputstyle>
  );
}
