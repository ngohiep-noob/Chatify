import styled from "styled-components";
import { WechatOutlined  } from "@ant-design/icons";
const Logostyle=styled.div`

.text {
    position: absolute; 
    top: 30px; 
    left: 82px; 
    width: 145px; 
    font-family: Inter; /* Body */
    font-size: 40px; 
    line-height: 56px; 
    color: #171A1FFF; /* neutral-900 */
}
.logooo{
    position: absolute; 
  top: 32px; 
  left: 32px; 
  width: 38px; 
  height: 38px; 
  font-size: 45px;
  fill: #171A1FFF;
}
`
export default function Logoo(){
    return(
        <Logostyle>
            <div className="logooo">
            <WechatOutlined />
            </div>
            <div  className="text">
            Chatify
        </div>
        </Logostyle>
        
        
    )
}