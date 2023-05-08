import React from "react";
import { LogoutOutlined,PhoneOutlined,PhoneTwoTone,MailTwoTone  } from "@ant-design/icons";
import { Row, Col, Avatar,Typography,Image } from "antd";
import styled from "styled-components";
const Inforstyle=styled.div`
//background: #B2F6BF;
height: 100vh;
border-left:1px solid rgb(230,230,230);
.logoAva {
    position: absolute; 
    top: 60px; 
    left: 78px; 
    width: 160px; 
    height: 160px; 
    font-size: 98px; 
    line-height: 150px; 
    background: rgb(64, 105, 229/0%);
    opacity: 1; 
    border-radius: 80px; 
  }
.sdt{
        display: flex;
		  align-items: center;
		  justify-content: center; 
    font-size: 15px; 
}
.icon{
    margin-top: 1px;
    margin-right: 6px;
    font-size: 20px; 
}
.name{
            display: flex;
		  align-items: center;
		  justify-content: center; 
          margin-top: 215px;
          padding: 10px;
          font-size: 15px; 
          font-family: Epilogue; /* Body */ 
            
}
.mail{
        
    display: flex;
    align-items: center;
	justify-content: center;

  
}
.img{
    width: 100px; 
    height: 100px; 
    margin-top: 2px;
    margin-bottom: 2px;
    margin-right: 2px;
    margin-left: 2px;
}
.ant-image-mask{
   
  background: rgb(0 0 0 / 0%);

  
}
.line{
   
    width: 280px; 
	margin: 0 auto;

}
`
export default function Infor(){
    return(
        <Inforstyle>
            <Row>
            <Col  span={24} ><Avatar className="logoAva" src="https://i.pinimg.com/originals/e1/ed/eb/e1edeb6d3f086b74b0f33be6e665c10f.jpg"></Avatar></Col>
            <Col  span={24} >
                <div className="name">Nguyễn Chánh Nghĩa</div>
                <div className="sdt"> 
                    <PhoneTwoTone className="icon"></PhoneTwoTone>
                    0363292917
                </div>
                <div className="mail"> 
                    <MailTwoTone className="icon"></MailTwoTone>
                    nguyenchanhnghia2917@gmail.com
                </div>
                <div className="line"><hr   /></div>
            </Col >
            <Col span={24} >
            <Image className="img"
               
                src="https://img.freepik.com/free-vector/realistic-colorful-galaxy-background_23-2148965681.jpg?w=2000"
                />
               <Image className="img"
              
                src="https://images.nationalgeographic.org/image/upload/v1638890315/EducationHub/photos/amazon-river-basin.jpg"
                />
                <Image className="img"
               
                src="https://www.andbeyond.com/wp-content/uploads/sites/5/Amazon-Rain-Forest.jpg"
                />
                <Image className="img"
               
                src="https://www.animalsaroundtheglobe.com/wp-content/uploads/2022/05/istockphoto-900629526-170667a.jpg"
                /> 
            </Col>
            
            </Row>
            
        </Inforstyle>
    )
}