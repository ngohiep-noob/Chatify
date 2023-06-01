import { Avatar, Typography } from "antd";
import styled from "styled-components";
import { MenuItem } from "../../types/Home";
import dayjs from "dayjs";

const DivStyled = styled.div`
  .name {
    position: absolute;
    top: 0px;
    left: 50px;
    font-family: Epilogue;
    font-size: 15px;
    color: #171a1fff; /* neutral-900 */
  }
  .last-msg {
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

export default function ListItem({
  name,
  lastChattingUsername,
  lastMessageTime,
  lastMessage,
}: MenuItem) {
  const nameSlipt = name.split(" ");

  return (
    <DivStyled>
      <div>
        <Avatar className="Avata">{nameSlipt[nameSlipt.length - 1][0]}</Avatar>
      </div>
      <div>
        <Typography.Text className="name" strong>
          {name}
        </Typography.Text>
        <Typography.Text className="last-msg">{`${lastChattingUsername}: ${lastMessage}`}</Typography.Text>
        <Typography.Text className="Time" type="secondary">
          {dayjs(lastMessageTime).format("HH:mm A")}
        </Typography.Text>
      </div>
    </DivStyled>
  );
}
