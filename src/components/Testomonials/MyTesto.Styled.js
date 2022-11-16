import styled from "@emotion/styled";

export const TestomonialWrapper = styled.div`
  margin-top: 200px;
  margin-bottom: 200px;
`;
export const TestomonialCardContainer = styled.div`
  height:100%;
  width:100%;
  display:flex;
  align-items: center;
  justify-content: center;
  gap:5%;
  &:hover{
  cursor:pointer;
 }
  @media only screen and (max-width: 900px)  {
  flex-direction: column;
  }
`;

export const TestomonialImg = styled.div`
color:grey;
 height:300px;
 width:400px;
 border-radius:5px;
 @media screen and (max-width:900px) {
  width:80%;
  height:200px;
}
`;
export const TestomonialFeedback = styled.div`
text-align: center;
display: flex;
align-items: center;
height: 150px;
box-shadow: 5px 5px 5px 0px orange;
-webkit-box-shadow: 5px 5px 5px 0px orange;
-moz-box-shadow: 5px 5px 5px 0px orange;
 width:300px;
 @media screen and (max-width:900px) {
  box-shadow: 3px 3px 3px 0px orange;
-webkit-box-shadow: 3px 3px 3px 0px orange;
-moz-box-shadow: 3px 3px 3px 0px orange;
background:linear-gradient(orange,yellow)
}
`;
