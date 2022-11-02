import React from "react";
import {ParText } from "../ParentStyle/ParentStyled";
import { TitleDivHidden, TitleDivVisible,LeftLink ,Nameh1,HeroIcon,DrawerMenu,DrawerItems,Drawertext,HeroP} from "./HeroSec.Styled";
import Toggle from '../Toggle/Toggle';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import landingBg from "../../image/profile.png";
import {
  DivHeroText,
  HeroWrapper,
  DivRightHero,
  HeroButton
} from "./HeroSec.Styled";
import { givePageName } from '../ScrollFunction';
import {motion} from "framer-motion"

function HeroSection({toggled,setToggledF,showDrawer}) {
  const drawerItemsList = ['Home','Services','Experience','Portfolio','Testomonial','Contact'];
  return (
    <motion.div
    initial={{y:-300}}
    animate={{y:0}}
    transition={{
      type:'spring',
      stiffness:100
    }}
    >
    <HeroWrapper>
   
{showDrawer ? (
          <DrawerMenu data-aos-duration='8000'  togDrawer={showDrawer} toggledValue={toggled}>
            <br/>
            <Toggle toggledValue={toggled} setToggledFun={setToggledF} togDrawer={showDrawer}/>
            <DrawerItems>
              {
               drawerItemsList.map((items,index)=>{
               return <Drawertext key={index}  value={items} onClick={givePageName} toggledValue={toggled}>{items}</Drawertext>
               })
              }
            </DrawerItems>
          </DrawerMenu>
        ) : (
          <></>
        )}
   
 <LeftLink>
        <HeroIcon>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/bhabishya.ghimireabd.7">   <FacebookIcon style={{ fontSize: "60px", backgroundColor: "blue" }}  /> </a>
        </HeroIcon>
        <HeroIcon>
          <InstagramIcon
            style={{ fontSize: "60px", backgroundColor: "orange" }}
          />
        </HeroIcon>
        <HeroIcon>
          <TwitterIcon style={{ fontSize: "60px", backgroundColor: "skyblue" }} />
        </HeroIcon>
        <HeroIcon>
        <a target="_blank" rel="noreferrer" href="https://github.com/Bhabishya-123"><GitHubIcon style={{ fontSize: "60px", backgroundColor: "grey" }}  /> </a>
        </HeroIcon>
        <HeroIcon>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bhabishya-ghimire-655286221/"> <LinkedInIcon style={{ fontSize: "60px", backgroundColor: "darkblue" }} /> </a>
        </HeroIcon>
      </LeftLink>
     
      <DivHeroText direct height="520px">
        <h2> <span style={{fontSize:'35px',color:"Orange"}}>W</span>ELCOME TO</h2>
       
        <div>
  
          <Nameh1>
          Bhabishya
        </Nameh1>
       
   
        <TitleDivVisible>
          <TitleDivHidden>
            {[
              "Web Developer",
              "Youtube Maker",
              "Coding Teacher",
              "Content Writer",
              "Poem Maker",
            ].map((item,index) => (
              <ParText key={index}color="red"> {item} </ParText>
            ))}
          </TitleDivHidden>
        </TitleDivVisible>
        <HeroP style={{ margin: "4% 0%" }}>
          Frontend Developer with high level of experience in web designing and
          development, producing the quality work and have gained all the
          experience along with best award on website development.
        </HeroP>
        <HeroButton value="Hireme" onClick={givePageName}>Hire me</HeroButton>
        </div>
      </DivHeroText>
      <DivRightHero>
    <img src={landingBg} alt="landingimage" style={{height:'100%',zIndex:'1'}}/>
      </DivRightHero>

  
    </HeroWrapper>
    </motion.div>
  );
}

export default HeroSection;
