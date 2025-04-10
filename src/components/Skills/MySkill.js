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
  BrandCircle,
} from "./MySkill.Styled";
import skillC from "../../image/skillC.png";
import freelance from "../../image/freelance.png";
import youtube from "../../image/youtube.png";
import supreme from "../../image/supreme.png";
import devfinity from "../../image/devfinity.png";
import { SkillHirebtn } from "./MySkill.Styled";
import styled from "styled-components";
import { BsFillAwardFill } from "react-icons/bs";
import { TbCornerUpRightDouble } from "react-icons/tb";
import { givePageName } from "../ScrollFunction";

const DivDesignCircle = styled.div`
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;
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
            <br /> <br />
          </div>
          <MySkillsCont displayValue={display}>
            <SkillContDet>
              <div>
                <h1 style={{ fontSize: "30px", margin: "6% 0%" }}>
                  Works for All these <br />{" "}
                  <span style={{ color: "orange" }}>Brands and Clients</span>
                </h1>
                <p>
                  Full-Stack Web Developer with over a year of experience in
                  building scalable and efficient systems. Skilled in developing
                  robust applications with Angular/React and .NET API
                  development and integration.
                </p>{" "}
                <br />
                <SkillHirebtn value="Hireme" onClick={givePageName}>
                  Hire me
                </SkillHirebtn>
              </div>
            </SkillContDet>

            <div style={{ position: "relative", display: "flex" }}>
              <div
                data-aos-duration="5000"
                data-aos="fade-up-right"
                style={{
                  background: "white",
                  borderRadius: "50%",
                  height: "300px",
                  width: "300px",
                  zIndex: "1",
                  boxShadow: "grey 0px 7px 29px 0px",
                  position: "relative",
                }}
              >
                <BrandCircle data-aos-duration="5000" data-aos="fade-up-right">
                  {" "}
                  <img
                    src={freelance}
                    alt="freelance pic"
                    style={{
                      height: "40px",
                      objectFit: "cover",
                      background: "white",
                    }}
                  />{" "}
                </BrandCircle>
                <BrandCircle
                  style={{ position: "absolute", left: "110px", top: "110px" }}
                >
                  <img
                    src={youtube}
                    alt="goole pic"
                    style={{
                      height: "50px",
                      objectFit: "cover",
                      background: "white",
                    }}
                  />
                </BrandCircle>
                <BrandCircle
                  data-aos-duration="5000"
                  data-aos="fade-up-left"
                  style={{
                    position: "absolute",
                    left: "50px",
                    bottom: "-20px",
                  }}
                >
                  <img
                    src={devfinity}
                    alt="twitter pic"
                    style={{
                      height: "21px",
                      objectFit: "cover",
                      background: "white",
                    }}
                  />
                </BrandCircle>
                <BrandCircle
                  data-aos-duration="5000"
                  data-aos="fade-up-left"
                  style={{ position: "absolute", right: "-30px", top: "60px" }}
                >
                  <img
                    src={supreme}
                    alt="supreme pic"
                    style={{
                      height: "38px",
                      objectFit: "cover",
                      background: "white",
                    }}
                  />
                </BrandCircle>
              </div>

              <DivDesignCircle
                style={{ position: "absolute", left: "-55%", top: "-12%" }}
              >
                <img
                  data-aos-duration="5000"
                  data-aos="fade-up-right"
                  src={skillC}
                  alt="design"
                ></img>
              </DivDesignCircle>
            </div>
          </MySkillsCont>

          <MyEduCont displayValue={display}>
            <DivEdu>
              <div>
                <h2>
                  {" "}
                  <BsFillAwardFill /> SLC
                </h2>
                <pre>
                  {" "}
                  <TbCornerUpRightDouble />
                  studied from Gyanodaya <br /> sec eng school
                </pre>{" "}
                <br />
                <pre>
                  {" "}
                  <TbCornerUpRightDouble />
                  passed SEE on year <br /> 2073 B.S
                </pre>{" "}
                <br />
                <pre>
                  {" "}
                  <TbCornerUpRightDouble />
                  secured A Grade
                </pre>
              </div>

              <div>
                <h2>
                  <BsFillAwardFill />
                  11/12
                </h2>
                <pre>
                  {" "}
                  <TbCornerUpRightDouble />
                  studied from Goldengate <br /> International College
                </pre>{" "}
                <br />
                <pre>
                  {" "}
                  <TbCornerUpRightDouble />
                  passed <sup>+</sup>2 from 2017 to <br /> 2019 A.D
                </pre>{" "}
                <br />
                <pre>
                  {" "}
                  <TbCornerUpRightDouble />
                  secured A Grade
                </pre>
              </div>

              <div>
                <h2>
                  <BsFillAwardFill /> Bachelor
                </h2>
                <pre>
                  {" "}
                  <TbCornerUpRightDouble />
                  New Summit College, Baneshwor
                </pre>{" "}
                <br />
                <pre>
                  {" "}
                  <TbCornerUpRightDouble />
                  Final Year Student
                </pre>{" "}
                <br />
                <pre>
                  {" "}
                  <TbCornerUpRightDouble />
                  Gained technical and practical
                  <br />
                  knowledge
                </pre>{" "}
                <br />
                {/* <pre> <TbCornerUpRightDouble/>currently studying<br/>    started from 2077 B.S</pre> <br/>
              <pre> <TbCornerUpRightDouble/>Batch 2077 B.S</pre> */}
              </div>
            </DivEdu>
          </MyEduCont>
        </SkillsDetailsCont>
      </SKillWrapper>
    </>
  );
}

export default MySkill;
