import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Message from "./message";
import { Button, Input } from "antd";
import {  EditTwoTone,InstagramFilled,PaperClipOutlined } from "@ant-design/icons";
const Headerstyle=styled.div`
display: flex;
justify-content: left;
height: 112px; 
border-bottom: 1px solid rgb(230,230,230);
.header{
    margin-top: 24px;
    margin-left: 24px;
 
}
`

const Contentstyle=styled.div` 
height: 560px;
overflow: auto;
border-bottom: 1px solid rgb(230,230,230);
.Messages{
    margin-left: 8px;
    margin-right: 8px;
}
`
const Senttstyle=styled.div` 
height: 60px;

display: flex;
justify-content: space-between; 

.input{
    background: #F3F4F6FF;
    width: 650px; 
    top:20px;
    left: 40px; 
    height: 35px; 
    border-radius: 0px;
    border-width: 0px;
}
.input input {
    width: 600px; 
    font-size: 14px; 
    background: #F3F4F6FF; /* neutral-200 */
    border-radius: 0px; /* border-m */
    border-width: 0px; 
    outline: none; 
  }
.icon{
    font-size: 20px;
}
.button{
    top:22px;
    left: -40px; 
}
.ant-btn {
    color: #FFFFFFFF; /* white */
    background: #00BDD6FF; /* primary-500 */
}
`
export default function Chatwindow(){
    return(
        <div>   
        <Headerstyle>
    <div className="header">
        <Header/>
    </div>
    </Headerstyle> 
    <Contentstyle>
        <div className="Messages" >
        <Message text="Hiep an cuc dung ko" photoUrl={"https://i.pinimg.com/originals/e1/ed/eb/e1edeb6d3f086b74b0f33be6e665c10f.jpg"} displayName="Hưng" time={"owner"}></Message>
        <Message text="Dung luon r" photoUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-bE2XzO5Am6y00usHjwkBtgKZTlws8N8pGA&usqp=CAU"} displayName="Khánh" time={"message"}></Message>
        <Message text="Tuyet" photoUrl={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc69be9e-1259-4f9b-94a8-5cf9dc3eb0e8/d89bqwy-8a184619-86b6-4065-bcd4-99d36741f3f2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjNjliZTllLTEyNTktNGY5Yi05NGE4LTVjZjlkYzNlYjBlOFwvZDg5YnF3eS04YTE4NDYxOS04NmI2LTQwNjUtYmNkNC05OWQzNjc0MWYzZjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ct9floXErP-IZ-0CKEimya_Z25XzDTV-7qitPlGuVBs"} displayName="Hoàng" time={"message"}></Message>
        <Message text="Hiep an cuc dung ko" photoUrl={"https://i.pinimg.com/originals/e1/ed/eb/e1edeb6d3f086b74b0f33be6e665c10f.jpg"} displayName="Hưng" time={"owner"}></Message>
        <Message text="Dung luon r" photoUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-bE2XzO5Am6y00usHjwkBtgKZTlws8N8pGA&usqp=CAU"} displayName="Khánh" time={"message"}></Message>
        <Message text="Tuyet" photoUrl={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc69be9e-1259-4f9b-94a8-5cf9dc3eb0e8/d89bqwy-8a184619-86b6-4065-bcd4-99d36741f3f2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjNjliZTllLTEyNTktNGY5Yi05NGE4LTVjZjlkYzNlYjBlOFwvZDg5YnF3eS04YTE4NDYxOS04NmI2LTQwNjUtYmNkNC05OWQzNjc0MWYzZjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ct9floXErP-IZ-0CKEimya_Z25XzDTV-7qitPlGuVBs"} displayName="Hoàng" time={"message"}></Message>
        <Message text="Hiep an cuc dung ko" photoUrl={"https://i.pinimg.com/originals/e1/ed/eb/e1edeb6d3f086b74b0f33be6e665c10f.jpg"} displayName="Hưng" time={"owner"}></Message>
        <Message text="Dung luon r" photoUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-bE2XzO5Am6y00usHjwkBtgKZTlws8N8pGA&usqp=CAU"} displayName="Khánh" time={"message"}></Message>
        <Message text="Tuyet" photoUrl={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc69be9e-1259-4f9b-94a8-5cf9dc3eb0e8/d89bqwy-8a184619-86b6-4065-bcd4-99d36741f3f2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjNjliZTllLTEyNTktNGY5Yi05NGE4LTVjZjlkYzNlYjBlOFwvZDg5YnF3eS04YTE4NDYxOS04NmI2LTQwNjUtYmNkNC05OWQzNjc0MWYzZjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ct9floXErP-IZ-0CKEimya_Z25XzDTV-7qitPlGuVBs"} displayName="Hoàng" time={"message"}></Message>
        </div>
    </Contentstyle>
    <Senttstyle>
    <Input placeholder=" Type a message" prefix={<EditTwoTone className="icon" />} 
    suffix={ <InstagramFilled className="icon" />}  className="input"/>
   
    <Button className="button">Send</Button>
    
    </Senttstyle>
    </div>
        
     
       
    )
}