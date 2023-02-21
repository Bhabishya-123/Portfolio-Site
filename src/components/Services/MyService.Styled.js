import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { HeroButton } from "../Herosection/HeroSec.Styled";


export const ServiceWrapper = styled.div`
  height:85vh;
  margin-top:80px;
  display:flex;
  justify-content: center;
  gap:4rem;
  overflow:hidden;
  @media only screen and (max-width: 1200px)  {
    flex-direction: column;
    align-items: center;
    height:190vh;
  }
`
export const ServiceText = styled.div`
  width:30%;
  margin-left:4rem;
  @media only screen and (max-width: 1200px)  {
width:50%;
margin:0;
  }
  @media only screen and (max-width: 600px)  {
width:60%;
margin:0;
  }
`
export const ServiceButton = styled(HeroButton)`
  background: orange;
  width:8rem;
  padding: 4px 2px;
  &:hover{
    color:grey;
  }
`

export const ButtonLink = styled.a`
 color:white;
 &:hover{
  color:grey;
 }
`

export const ServiceCardContainer = styled.div`
width:50%;
height:96%;
margin-right:4rem;
position:relative;
@media only screen and (max-width: 1200px)  {
width:60%;
margin:0;
  }
  @media only screen and (max-width: 600px)  {
  display:flex;
  flex-direction:column;
  align-items: center;
  gap:4rem
  }
`
export const ServiceCard = styled(Card)`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:10px;
  gap:5px;
  background:${(props)=>props.tv===true?'black': ' '};
position: absolute;
 color:grey;
 height:250px;
 width:250px;
 border:2px solid silver;
 box-shadow: -4px -4px 0px 0px rgb(255,147,0);
 &:hover{
  box-shadow: -5px -5px 1px 0px rgb(255,140,0);
  cursor:pointer;
 }
 @media only screen and (max-width: 600px)  {
width:100%;
margin:0;
position:static;

  }
`

export const BtnP = styled.p`
position:absolute;
top: 85%;
background:none;
color:skyblue;
font-size:14px;
border-right:1px solid violet;
border-top:1px solid violet;
padding:4px;
&:hover{
  border:1px solid violet;
  cursor:pointer;
 }
 &:active{
  padding:5px;
 }
`