import styled from "@emotion/styled";

export const ProjectWrapper = styled.div`
height: 70vh;
width:100%;
margin-top: 100px;
margin-bottom: 130px;
overflow: hidden;
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
`;

export const Prev =styled.div`
display:flex;
align-items: center;
justify-content: center;
display:none
`;

export const ProjectCard = styled.div`
transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1.5s;
    opacity: 0.8;
  
 &:hover{
    transform: scale(1.05);
    opacity: 1;
  }
  
`


// export const DivImgPr =styled.div`
// height:200px;
// transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1.5s;
// opacity: 0.85;
// &:hover{
// transform: scale(1.2);
// opacity: 1;
// z-index: 1;
// }
// `;




