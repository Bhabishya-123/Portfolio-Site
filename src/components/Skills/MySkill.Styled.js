import styled from "@emotion/styled";
import { Button } from "../ParentStyle/ParentStyled";
import { HeroButton } from "../Herosection/HeroSec.Styled";

export const SKillWrapper = styled.div`
  height: 85vh;
  margin-top: 80px;
  @media only screen and (max-width: 900px)  {
    height:140vh;
  }
`;
export const SkillCircleContainer = styled.div`
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
`;
export const CircleTextCont = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: larger;
  justify-content: center;
  text-align: center;
`;
export const SkillCircle = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  border-left: 2px solid skyblue;
  border-right: 2px solid orange;
  border-top: 2px solid orange;
  border-bottom: 2px solid skyblue;
`;
export const SkillsDetailsCont = styled.div`
  height: 70vh;
  /* background-color: aliceblue; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SkillButton1 = styled(Button)`
  background: ${(props) => (props.displayValue? 'orange' : "grey")};
  width: 10rem;
  height: 3.5rem;
  padding: 3px 3px;
  margin-top: 2rem;
`;
export const SkillButton2 = styled(Button)`
  background: ${(props) => (props.displayValue? 'grey' : "orange")};
  width: 10rem;
  height: 3.5rem;
  padding: 3px 3px;
  margin-top: 2rem;
`;

export const SkillHirebtn = styled(HeroButton)`
     width: 8rem;
     height:3rem;
  transform: scale(1.0);
  &:hover {
    color: grey;
    transform: scale(1.1);
  }
`;

export const MySkillsCont = styled.div`
  height: 80%;
  width:75%;
  display:flex;
  align-items: center;
  justify-content: center;
  gap: 10%;
  display: ${(props) => (props.displayValue? 'none' : "visible")};
  animation: skillanimate 2s ease 0s 1 normal forwards;
@keyframes skillanimate {
	0% {
		opacity: 0;
	}

100% {
		opacity: 1;
	}
}
@media only screen and (max-width: 900px)  {
    margin-top:30px;
    flex-direction: column;
    gap:2%;
    height:900px
  }
`;


export const SkillContDet = styled.div`
display:flex;
flex-direction:column;
gap:5%;
width:300px;
z-index: 1;
@media only screen and (max-width: 900px)  {
    margin-bottom:50px;
  }
`;

export const MyEduCont = styled.div`
  width:75%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.displayValue? 'visible' : "none")};
  animation: eduanimate 4s ease 0s 1 normal forwards;
@keyframes eduanimate {
	0% {
		opacity: 0;
	}

100% {
		opacity: 1;
	}
}
`;

export const DivEdu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:20%;
  margin-top:50px;
  @media only screen and (max-width: 900px)  {
    flex-direction: column;
  }
`