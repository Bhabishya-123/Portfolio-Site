import React from 'react'
import {
    SkillCircle,
    SkillCircleContainer,
    CircleTextCont
  } from "./Details.Styled";

function DetailCircle() {
  return (
    <>
          <SkillCircleContainer>
          <CircleTextCont>
            <SkillCircle> <h4>3+</h4> </SkillCircle>
            <h4>
            years <br /> <span style={{ color: "orange" }}>Experience</span>
          </h4>
          </CircleTextCont>
          <CircleTextCont>
            <SkillCircle><h4>20+</h4></SkillCircle>
            <h4>
            completed <br /> <span style={{ color: "orange" }}>Projects</span>
          </h4>
          </CircleTextCont>
          <CircleTextCont>
            <SkillCircle><h4>5+</h4></SkillCircle>
            <h4>
            companies<br /> <span style={{ color: "orange" }}>Works</span>
          </h4>
          </CircleTextCont>
        </SkillCircleContainer>
    </>
  )
}

export default DetailCircle