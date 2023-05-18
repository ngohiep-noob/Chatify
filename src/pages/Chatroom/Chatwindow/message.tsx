import { Avatar, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import {  TeamOutlined, UserOutlined ,CheckCircleTwoTone} from "@ant-design/icons";
const Messagestyle=styled.div`
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
.messageContent  img {
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

`
export default function Message({text,displayName,photoUrl,time}:{text: string,displayName:string,photoUrl:string,time:string}){
    return(
        <Messagestyle>
            <div className={time}>  
            <div className="messageInfo">
                <img src={photoUrl} />
                <span>{displayName}</span>
            </div>
            <div className="messageContent">
                <p>{text}</p>
            </div>

        </div>
    </Messagestyle>
        
        
     
       
    )
}