import { Button } from "../ParentStyle/ParentStyled";
import styled from "styled-components";
import { DivRight } from "../ParentStyle/ParentStyled";

export const HeroWrapper = styled.div`
  height: 80vh;
  width:100%;
  display: flex;
  align-items: center;
  position:relative;
  gap: 4rem;
  margin-bottom: 200px;
  overflow:hidden;
`;

// export const InnerTopWrapper = styled.div`
// display: none;
//    @media only screen and (max-width: 500px)  {
//     display: ${(props)=>props.toggledValue===true?'none': 'flex'};
//     background-color: gainsboro;
//     border-radius: 0% 100% 100% 0% / 65% 0% 100% 35%;
// height: 60%;
// width:100%;
// position:absolute;
// top:0px;
//   }

// `

export const Nameh1 = styled.h1`
 font-size: 50px;
  margin: 2% 0%;
  @media only screen and (max-width: 500px)  {
    font-size: 45px;
  }
`

export const TitleDivHidden = styled.div`
  display: flex;
  color: green;
  flex-direction: column;
  animation: run 10s ease-in-out infinite alternate;
  @keyframes run {
    20% {
      transform: translateY(-5px);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-62px);
    }
    80% {
      transform: translateY(-86px);
    }
    100% {
      transform: translateY(-118px);
    }
  }
`;
export const TitleDivVisible = styled.div`
  overflow: hidden;
  height: 26px;
`;
export const LeftLink = styled.div`
background: linear-gradient(90deg, orange 0%, #fff 100%);
  display: flex;
  flex: 0.4;
  flex-direction: column;
`;

export const DivHeroText = styled.div`
position:relative;
  display: flex;
  flex-wrap: wrap;
  flex:2;
  flex-direction: column;
  margin-left:4%;
  z-index:1;
`;
export const HeroP = styled.div`
   @media only screen and (max-width: 900px)  {
  width:75%;
  }
`;
export const DivRightHero = styled(DivRight)`
  height: 100%;
  overflow:hidden ;
 @media only screen and (max-width: 900px)  {
  display:none;
  }
 `
export const DivImage = styled.div`
  display:flex;
  position:absolute;
  left:2%;
  @media only screen and (max-width: 700px)  {
  left:-2%;
  }
 `
export const HeroButton = styled(Button)`
  width: 8rem;
  border-radius: 15px;
  transform: scale(1.1);
  box-shadow: -4px 16px 42px 0px rgba(295,165,0,1);
-webkit-box-shadow: -4px 16px 42px 0px rgba(295,165,0,1);
-moz-box-shadow: -4px 16px 42px 0px rgba(295,165,0,1);
  &:hover {
    background: antiquewhite;
    color: silver;
    transform: scale(1.2);
  }
`;

export const HeroIcon = styled.div`
  margin-bottom: 5px;
  background-color: grey;
  width: 65px;
  animation: i-move 5s linear 2s infinite alternate;
  @keyframes i-move {
    0% {
      transform: translateX(0);
    }
    20% {
      transform: translateX(2px);
      transform: rotate(60deg);
      background-color: paleturquoise;
    }
    40% {
      transform: translateX(4px);
      transform: rotate(120deg);
      background-color: slateblue;
    }
    60% {
      transform: translateX(6px);
      transform: rotate(180deg);
    }
    80% {
      transform: translateX(8px);
      transform: rotate(240deg);
      background-color: aqua;
    }
    100% {
      transform: translateX(10px);
      transform: rotate(360deg);
      background-color: grey;
    }
  }
  &:hover {
    animation-play-state: paused;
    background-color: blue;
    cursor: pointer;
    opacity: 0.5;
  }
`;


export const Drawertext = styled.h4` 
font-size:20px;
cursor: pointer;
margin-top: 20px;
opacity:0.8;
&:hover{
  opacity:0.6;
}
`;

export const DrawerItems = styled.div`
 display: flex;
 flex-direction:column;
 align-items: center;
animation: animate 0.5s ease-in-out ;
@keyframes animate{
  0%{opacity:0;}
  50%{opacity:0.1; }
  75%{opacity:0.5; }
  100%{opacity:1}
};
`;

export const DrawerMenu = styled.div`
display:none;
color: black;
animation: animatename 0.5s linear ;
@keyframes animatename{
  0%{width:0px;}
  100%{width:120px; }
};
 @media only screen and (max-width: 900px)  {
  display:flex;
  width:${(props)=>props.togDrawer===true?'120px': '0px'};
  flex-direction:column;
  align-items:center;
  gap:30px;
  position: absolute;
  background:${(props)=>props.toggledValue===true?'black': '#ffb930'};
  border:${(props)=>props.toggledValue===true?'1px solid grey': '1px solid orange'};
  z-index:1;
  height:450px;
  };
`;
