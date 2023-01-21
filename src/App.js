import { ThemeProvider } from "styled-components";
import {useState} from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/Herosection/HeroSection";
import { GlobalStyled } from "./components/ParentStyle/Global";
import MyService from "./components/Services/MyService";
import MySkill from "./components/Skills/MySkill";
import MyProject from "./components/Projects/MyProject";
import MyTestomonial from "./components/Testomonials/MyTestomonial";
import Contact from './components/Contact/Contact'
import DetailCircle from "./components/DetailCircle/DetailCircle";
import Scrollbtn from "./components/Scrollbtn";
import Chatgpt from "./components/Chatgpt/Chatgpt";

const theme = {
  dark: {
    background: "black",
    color: "white",
  },
  light: {
    background: "white",
    color: "black",
  },
};
function App() {
//for showing drawer
const [showDrawer,setShowDrawer] = useState(false);

  //for skill and education toggle like for display none
  const [display, setDisplay] = useState(false);
  const displayFun = () => {
    setDisplay(!display);
  };
  
  //for themes day night change
  const [toggled, setToggled] = useState(false);
  const toggleFun = () => {
    setToggled(!toggled);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyled toggled={toggled} />
        <Scrollbtn/>
        <Header  toggled={toggled} setToggledF={toggleFun} showDrawer={showDrawer} setShowDrawer={setShowDrawer}/>
        <HeroSection toggled={toggled} setToggledF={toggleFun}  showDrawer={showDrawer}/>
        <MyService />
        <DetailCircle/>
        <MySkill display={display} setDisplayF={displayFun} />
        <MyProject />
        <MyTestomonial />
        <Contact toggled={toggled}/>
        <Chatgpt/>
      </ThemeProvider>
    </>
  );
}

export default App;
