import React from "react";
import {
  SKillWrapper,
  SkillsDetailsCont,
  SkillButton1,
  SkillButton2,
  MySkillsCont,
  MyEduCont,
  SkillContDet,
  DivEdu,
  BrandCircle
} from "./MySkill.Styled";
import skillC from "../../image/skillC.png";
import amazon from "../../image/amazon.png"
import google from "../../image/google.png"
import intel from "../../image/intel.png"
import asus from "../../image/asus.png"
import { SkillHirebtn} from "./MySkill.Styled";
import styled from "styled-components"
import {BsFillAwardFill} from "react-icons/bs";
import { TbCornerUpRightDouble } from "react-icons/tb";
import { givePageName } from '../ScrollFunction';

const DivDesignCircle = styled.div`
 @media only screen and (max-width: 500px)  {
display:none;
    }
`
function MySkill({ display, setDisplayF }) {
  return (
    <>
      <SKillWrapper>
        <SkillsDetailsCont>
        <div>
            <SkillButton1
              displayValue={display}
              onClick={() => {
                if (display) setDisplayF();
              }}
            >
              My Experiences
            </SkillButton1>
            <SkillButton2
              displayValue={display}
              onClick={() => {
                if (!display) setDisplayF();
              }}
            >
              My Educations
            </SkillButton2>
            <br /> <br/>
          </div>
          <MySkillsCont displayValue={display}>
            <SkillContDet>
              <div>
                <h1 style={{ fontSize: "30px", margin: "6% 0%" }}>
                  Works for All these <br />{" "}
                  <span style={{ color: "orange" }}>Brands and Clients</span>
                </h1>

                <p>
                Frontend development is the client side interface development whose code is visible to the users.
                Backend development is the client side interface development whose code isn't visible to the users.
                </p> <br/>
                <SkillHirebtn value="Hireme" onClick={givePageName}>Hire me</SkillHirebtn>
              </div>
            </SkillContDet>

            <div style={{ position: "relative", display: "flex"}}>
              <div data-aos-duration='5000' data-aos="fade-up-right"
                style={{
                  background: "white",
                  borderRadius: "50%",
                  height: "300px",
                  width: "300px",
                  zIndex: "1",
                  boxShadow: "grey 0px 7px 29px 0px",
                  position:"relative"
                }}
              >
               <BrandCircle data-aos-duration='10000' data-aos="fade-up-right"> <img src={amazon} alt="amazon pic" style={{height:'40px',objectFit:'cover',background:"white"}}/> </BrandCircle>
               <BrandCircle style={{position:"absolute",left:"110px",top:"110px"}}><img src={google} alt="goole pic" style={{height:'50px',objectFit:'cover',background:"white"}}/></BrandCircle>
               <BrandCircle data-aos-duration='10000' data-aos="fade-up-left" style={{position:"absolute",left:"50px",bottom:"-20px"}}><img src={asus} alt="twitter pic" style={{height:'21px',objectFit:'cover',background:"white"}}/></BrandCircle>
               <BrandCircle data-aos-duration='10000' data-aos="fade-up-left" style={{position:"absolute",right:"-30px",top:"60px"}}><img src={intel} alt="intel pic" style={{height:'38px',objectFit:'cover',background:"white"}}/></BrandCircle>
              </div>

              <DivDesignCircle  style={{ position: "absolute", left: "-55%", top: "-12%" }}>
                <img data-aos-duration='5000' data-aos="fade-up-right" src={skillC} alt="design"></img>
              </DivDesignCircle>
            </div>
          </MySkillsCont>

          <MyEduCont displayValue={display}>
          <DivEdu>
            <div style={{display:'flex',flexDirection:'column',gap:'50px'}}>
             <div>
              <h2> <BsFillAwardFill/> SLC</h2>
              <pre> <TbCornerUpRightDouble/>studied from Gyanodaya <br/>    sec eng school</pre> <br/>
              <pre> <TbCornerUpRightDouble/>passed SEE on year <br/>    2074 B.S</pre> <br/>
              <pre> <TbCornerUpRightDouble/>secured A <sup>+</sup>Grade</pre>
              </div>
              <div>
              <h2><BsFillAwardFill/> 11/12</h2>
              <pre> <TbCornerUpRightDouble/>studied from Gyanodaya <br/>    sec eng school</pre> <br/>
              <pre> <TbCornerUpRightDouble/>passed SEE on year <br/>    2074 B.S</pre> <br/>
              <pre> <TbCornerUpRightDouble/>secured A <sup>+</sup>Grade</pre>
              </div>
              </div>

              <div style={{display:'flex',flexDirection:'column',gap:'50px'}}>
             <div>
              <h2><BsFillAwardFill/> Bachelor</h2>
              <pre> <TbCornerUpRightDouble/>studied from Gyanodaya <br/>    sec eng school</pre> <br/>
              <pre> <TbCornerUpRightDouble/>passed SEE on year <br/>    2074 B.S</pre> <br/>
              <pre> <TbCornerUpRightDouble/>secured A <sup>+</sup>Grade</pre>
              </div>
              <div>
              <h2><BsFillAwardFill/> Master</h2>
              <pre> <TbCornerUpRightDouble/>studied from Gyanodaya <br/>    sec eng school</pre> <br/>
              <pre> <TbCornerUpRightDouble/>passed SEE on year <br/>    2074 B.S</pre> <br/>
              <pre> <TbCornerUpRightDouble/>secured A <sup>+</sup>Grade</pre>
              </div>
              </div>
          </DivEdu>
          </MyEduCont>
        </SkillsDetailsCont>
      </SKillWrapper>
    </>
  );
}

export default MySkill;
