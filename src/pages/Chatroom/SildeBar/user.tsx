import React from "react";
import { LogoutOutlined,UserAddOutlined  } from "@ant-design/icons";
import { Avatar,Typography,Button} from "antd";
import styled from "styled-components";
const Avastyle=styled.div`
     display: flex;
     .name{
    position: absolute; 
  top: 5px; 
  left: 50px; 
  font-family: Epilogue; /* Heading */
  font-size: 16px;     
  line-height: 26px; 
  color: #171A1FFF; /* neutral-900 */
     }
     .gmail{
        position: absolute; 
  top: 26px; 
  left: 50px; 
  
  font-size: 10px; 
  line-height: 22px; 
  color: #171A1FFF; /* neutral-900 */
     }
     .Avata{
        position: absolute; 
        top: 3px;
        left: -6px; 
        width: 45px; 
        height: 45px; 
        font-size: 20px; 
        line-height: 35px; 
        color: #FFFFFFFF; /* white */
        background: rgb(64, 105, 229/0%);
        opacity: 1; 
        overflow: hidden; 
        border-radius: 40px; 
     }
     .logout{
        position: absolute; 
         top: 7px; 
        left: 307px; 
        color: #FFFFFFFF; /* white */
        background: #E05858FF; /* tertiary3-500 */
     }
     .Add{
        position: absolute; 
         top: 7px; 
        left: 270px; 
        color: #FFFFFFFF; /* white */
        background: #1091F4FF; /* tertiary3-500 */
     }
     .line{
        position: absolute; 
  top: 55px; 
  left: 10px; 
  width: 300px; 
  height: 0px; 
  border-width: 1px; 
  border-color: #BCC1CAFF; /* neutral-400 */
  border-style: solid; 
  transform: rotate(0deg);
     }
`;
export default function User(){
    return(
        <Avastyle>
            <div>
            <Avatar className="Avata" src="https://i.pinimg.com/originals/e1/ed/eb/e1edeb6d3f086b74b0f33be6e665c10f.jpg"></Avatar>
        </div>
        <div>
            <Typography className="name">Nguyễn Chánh Nghĩa</Typography>
            <Typography className="gmail">nguyenchanhnghia2917@gmail.com</Typography>
        </div>
        <div>
            <Button icon={<LogoutOutlined/> } className="logout"></Button>
            <Button icon={<UserAddOutlined /> } className="Add"></Button>
        </div>
        <div><hr   className="line"/></div>
        </Avastyle>
        
        
    )
}