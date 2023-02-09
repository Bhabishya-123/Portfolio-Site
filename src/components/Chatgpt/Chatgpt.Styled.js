
import styled from "styled-components";

export const ChatgptWrapper = styled.div`
  position:fixed;
  border-radius:10px 20px 10px 20px;
  top:28%;
  right:0;
  z-index:2;
`;
export const MessageChatgpt = styled.div`
height: 40%;
  width:25%;
  background:blue;
  border-radius:10px 0px 20px 0px;
  position:fixed;
  top:33%;
  right:2.6%;
  z-index:3;
  display: none;
`;
export const InitialChatgpt = styled.div`
position: fixed;
top:45%;
right:0;
width: 20px;
  height:100px;
  background:orange;
  border-radius:20px 0px 10px 0px;
  z-index:4;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity:0.5;
  &:hover{
    cursor:pointer;
    opacity:1
  }
`;