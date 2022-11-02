
import styled from "styled-components";
import { Button } from "../ParentStyle/ParentStyled";
export const ContactWrapper = styled.div`
  height: 70vh;
  background:orange;
  /* background: linear-gradient(0deg, rgba(144,198,120,1) 0%, rgba(230,231,34,1) 59%, rgba(236,201,56,1) 69%, rgba(241,201,53,1) 83%, rgba(253,202,45,0.7231267507002801) 94%); */
  border-radius:100% 0% 100% 0% / 84% 100% 0% 16% ;
  display:flex;
  justify-content: center;
  position: relative;
`;

export const ContactCont = styled.div`
  margin-right:15%;
  height:90%;
  width:50%;
  border:2px solid whitesmoke;
  background:${(props)=>props.toggled===true?'black': 'white'};
  border-radius:5%;
  position: absolute;
  top:-5%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:10%;
  @media screen and (max-width:800px) {
    margin-left:10%;
    width:90%;
}
`;

export const ButtonC = styled(Button)`
  background-color: orange;
  border-radius: 20px;
  border: none;
  :hover{
    background: wheat;
    color:grey;
  }
`;
