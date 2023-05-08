import React from "react";
import { Row, Col } from "antd";
import User from "./user";
import Logo from "./Logo";
import Search from "./Search";
import Chatgroup from "./Chat-group";
import styled from "styled-components";
const Sildebarstyle=styled.div`
//background: #B2F6BF;
height: 100vh;
border-right:1px solid rgb(230,230,230);
.logoo{
        position: absolute; 
        top: 10px; 
        left: 75px; 
        width: 188px; 
        height: 56px; 
}
.userr{
position: absolute; 
  top: 122px; 
  left: 21px; 
  width: 223px; 
  height: 48px; 
}
.search{ 
    position: absolute; 
  top: 200px; 

}
.Chatgroup{

  top: 250px; 
}
`
export default function Sildebar(){
    return(
        <Sildebarstyle>
            <Row>
            <Col  span={24} className="logoo"><Logo/></Col>
            <Col  span={24} className="userr"><User/></Col >
            <Col  span={24}className="search"><Search /></Col >
            <Col  span={24}className="Chatgroup"><Chatgroup /></Col >
            </Row>
            
        </Sildebarstyle>
        
    )
}