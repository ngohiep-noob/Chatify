import { Avatar } from "antd";
import styled from "styled-components";

const Messagestyle = styled.div`
  .message {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }
  .messageInfo {
    display: flex;
    flex-direction: column;
    color: gray;
    font-weight: 300;
  }
  .messageInfo img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  .messageContent {
    max-width: 80%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .messageContent p {
    background-color: #ddddf7;
    padding: 10px 20px;
    border-radius: 0px 10px 10px 10px;
    max-width: max-content;
  }

  .messageContent img {
    width: 50%;
  }

  .owner {
    display: flex;
    flex-direction: row-reverse;
    gap: 20px;
    margin-bottom: 20px;
    .messageContent {
      align-items: flex-end;
      p {
        background-color: #8da4f1;
        color: white;
        border-radius: 10px 0px 10px 10px;
      }
    }
  }
`;
const spanStyles = {
  color: '#fff', // Example text color
  fontSize: '20px', // Example font size
  fontWeight: 'bold',
};

export interface MessageProps {
  text: string;
  displayName: string;
  photoUrl: string;
  isOwner: boolean;
}

export default function Message({
  text,
  displayName,
  photoUrl,
  isOwner,
}: MessageProps) {
  return (
    <Messagestyle>
      <div className={isOwner === true ? "owner" : ""}>
        <div className="messageInfo">
          <Avatar size={44} style={{ backgroundImage: isOwner === false ? "url('data:image/jpeg;base64,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')": "url('https://wallpaperaccess.com/full/270177.jpg')"
            ,
             backgroundSize: 'cover' }}>
            <span style={spanStyles}>

            {displayName[0].toUpperCase()}
            </span>
            </Avatar>
          <span>{displayName}</span>
        </div>
        <div className="messageContent">
          <p>{text}</p>
        </div>
      </div>
    </Messagestyle>
  );
}
