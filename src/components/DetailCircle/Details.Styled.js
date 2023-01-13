import styled from "styled-components";

export const SkillCircleContainer = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
  margin-top:140px;
  margin-bottom: 120px;
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
