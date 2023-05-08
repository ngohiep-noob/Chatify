import styled from "styled-components";
import { WechatOutlined  } from "@ant-design/icons";
const Logostyle=styled.div`
.text {
    position: absolute; 
    top: 9px; 
    left: 55px; 
    width: 145px; 
    font-family: Inter; /* Body */
    font-size: 40px; 
    line-height: 56px; 
    color: #171A1FFF; /* neutral-900 */
}
.logooo{
    position: absolute; 
  top: 9px; 
  left: 5px; 
  width: 38px; 
  height: 38px; 
  font-size: 40px;
  fill: #171A1FFF;
}
.line{
    position: absolute; 
  top: 55px; 
  left: -5px; 
  width: 220px; 
  height: 0px; 
  border-width: 2px; 
  border-color: #BCC1CAFF; /* neutral-400 */
  border-style: solid; 
  transform: rotate(0deg); 
}
`
export default function Logo(){
    return(
        <Logostyle>
            <div className="logooo">
            <WechatOutlined />
            </div>
            <div  className="text">
            Chatify
        </div>
        <div><hr   className="line"/></div>
        </Logostyle>
        
        
    )
}