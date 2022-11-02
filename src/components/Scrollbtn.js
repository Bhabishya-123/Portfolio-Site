import React, { useState, useEffect } from 'react';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { BiChevronsDown } from "react-icons/bi";
import { BiChevronsUp } from "react-icons/bi";

// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import styled from "styled-components"

const Topbtn = styled.div`
    position: fixed;
    top:85%;
    left:92%;
    cursor: pointer;
    z-index:1;
    opacity: 0.7;
    &:hover{
      opacity: 1;
    }
`
const Downbtn = styled.div`
    position: fixed;
    top:15%;
    left:92%;
    cursor: pointer;
    z-index:1;
    opacity: 0.7;
    &:hover{
      opacity: 1;
    }
`



function Scrollbtn() {
  //this will hold state 
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showDownBtn, setShowDownBtn] = useState(false);
  

  //this will update yaxis length in scroll on basis which state of showtopbtn is updated
  //use effect is used to update dom directly without refreshing
  useEffect(() => {
    //addevent listener will update state whenever scrolling is done
    window.addEventListener('scroll', () => {
        if (window.scrollY > 2000) {
            setShowTopBtn(true);
        } 
        else if(window.scrollY < 1500 && window.scrollY > 20){
          setShowDownBtn(true);
        }
        else{
          setShowTopBtn(false);
          setShowDownBtn(false);
        }
    });
}, []);

    const gotoTop = ()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    }
    const gotoDown = ()=>{
        window.scrollTo({  top: document.documentElement.scrollHeight,behavior:"smooth"})
    }


  return (
    <>
            {showTopBtn? <Topbtn onClick={gotoTop}> <BiChevronsUp  style={{fontSize:"35px"}}/></Topbtn>: <></>}
            {showDownBtn? <Downbtn onClick={gotoDown}><BiChevronsDown style={{fontSize:"35px"}} /></Downbtn>: <></>}
    </>
  )
}

export default Scrollbtn