import React from "react";
import { LogoutOutlined,UserAddOutlined  } from "@ant-design/icons";
import { Avatar,Typography,Button} from "antd";
import styled from "styled-components";
const Avastyle=styled.div`
     display: flex;
     .name{
    position: absolute; 
  top: 0px; 
  left: 50px; 
  font-family: Epilogue; /* Heading */
  font-size: 14px;     
  line-height: 30px; 
  color: #171A1FFF; /* neutral-900 */
     }
     .gmail{
        position: absolute; 
  top: 20px; 
  left: 50px; 

  font-size: 12px; 
  line-height: 22px; 
  color: #171A1FFF; /* neutral-900 */
     }
     .Avata{
        position: absolute; 
        top: 3px;
        left: 5px; 
        width: 35px; 
        height: 35px; 
        font-size: 20px; 
        line-height: 35px; 
        color: #FFFFFFFF; /* white */
        background: #4069E5FF; /* tertiary1-500 */
        
        opacity: 1; 
        overflow: hidden; 
        border-radius: 40px; 
     }
     .Time{
        position: absolute; 
         top: 7px; 
        left: 285px; 
        font-size: 12px; 
     }
`;
export default function Avata(){
    return(
        <Avastyle>
            <div>
            <Avatar className="Avata">HH</Avatar>
        </div>
        <div>
            <Typography className="name">Hoàng Khánh </Typography>
            <Typography className="gmail">Hello Cac ban</Typography>
            <Typography className="Time">0:00AM</Typography>
        </div>
        
        </Avastyle>
        
        
    )
}