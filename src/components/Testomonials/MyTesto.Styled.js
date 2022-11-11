import styled from "@emotion/styled";

export const TestomonialWrapper = styled.div`
  margin-top: 200px;
  margin-bottom: 200px;
`;
export const TestomonialDualCardContainer = styled.div`
  height:100%;
  width:100%;
  display:flex;
  align-items: center;
  justify-content: center;
  gap:5%;
  @media only screen and (max-width: 900px)  {
  flex-direction: column;
  }
`;
export const TestomonialSingleCardContainer = styled.div`
  height:100%;
  width:100%;
  display:none;
  @media only screen and (max-width: 900px)  {
  display:block;

  }
`;
export const TestomonialCard = styled.div`
color:grey;
 height:300px;
 width:400px;
 border-radius:5px;
 &:hover{
  cursor:pointer;
 }
 @media screen and (max-width:900px) {
  width:80%;
  height:200px;
}
`;