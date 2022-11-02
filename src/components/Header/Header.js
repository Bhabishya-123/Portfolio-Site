import React from 'react'
import {DivLeft,ImageContainer,Button} from '../ParentStyle/ParentStyled'
import logo from '../../image/logo.png'
import Toggle from '../Toggle/Toggle';
import { HeaderWrapper,MenuIcon1,MenuIcon2,HeaderDivRight,NavText } from './Header.Styled';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { givePageName } from '../ScrollFunction';
import {motion} from "framer-motion";

export default function Header({toggled,setToggledF,setShowDrawer,showDrawer}) {
  //for framer motion
  const headerVariant = {
    visible: { opacity: 1},
    hidden: { opacity: 0},
  }
  return (
    <motion.div
  variants={headerVariant}
  initial="hidden"
  animate="visible"
  transition={{duration:1.2}}
  >
    <HeaderWrapper>
      <DivLeft>
        <ImageContainer>
        <img src={logo} alt="img" height="100%" width="150px"/>
        </ImageContainer>
        <Toggle toggledValue={toggled} setToggledFun={setToggledF}/>
      </DivLeft>
      <HeaderDivRight>
      { 
      [ 'Home','Services', 'Experience','Portfolio','Testomonial'].map((item,index) => <NavText key={index} value={item} onClick={givePageName} marRig="6%"> {item}  	</NavText>)
      }
         <Button value="Contact" onClick={givePageName}>Contact</Button>
      </HeaderDivRight>

   {showDrawer?(
      <MenuIcon2>
      <CloseIcon onClick={()=>setShowDrawer(!showDrawer)} style={{fontSize:'40px'}}/> 
      </MenuIcon2>
   ):(
    <MenuIcon1>
    <MenuIcon onClick={()=>setShowDrawer(!showDrawer)} style={{fontSize:'40px'}}/>
    </MenuIcon1>
   )}
     
      </HeaderWrapper>
      </motion.div>
  )
}

