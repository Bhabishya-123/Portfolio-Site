import { WrapperContainer,DivRight } from "../ParentStyle/ParentStyled";
import styled from "styled-components";

export const HeaderWrapper = styled(WrapperContainer)`
  overflow: hidden;
margin-bottom: 5px;
transition: 0.2s;
`;

export const NavText = styled.p`
  color: ${(props) => (props.color ? props.color : "")};
  font-weight: 500;
  font-size: 1.2rem;
  margin-right: ${(props) => (props.marRig ? props.marRig : "")};
  cursor:pointer;
  &:hover{
    color:orangered
  }
`;

export const MenuIcon1 = styled.div`
    display:none;
    @media only screen and (max-width: 900px)  {
    flex:0.5;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
  }`;
export const MenuIcon2 = styled.div`
    display:none;
    @media only screen and (max-width: 900px)  {
    flex:0.5;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
  }`;

  export const HeaderDivRight = styled(DivRight)`
    @media only screen and (max-width: 900px)  {
    display:none;
  }
`;