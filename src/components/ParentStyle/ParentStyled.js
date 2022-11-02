import styled from "styled-components";

export const WrapperContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const DivLeft = styled.div`
  height: ${(props) => (props.height ? props.height : "")};
  display: flex;
  flex: 0.7;
  flex-direction: ${(props) => (props.direct ? "column" : "row")};
  justify-content: center;
  align-items: center;
`;
export const DivRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
  padding: 0% 5%;
`;
export const ImageContainer = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  height: 90px;
  img {
    cursor:pointer
  }
`;
export const ParText = styled.p`
  color: ${(props) => (props.color ? props.color : "")};
  font-weight: 500;
  font-size: 1.2rem;
  margin-right: ${(props) => (props.marRig ? props.marRig : "")};
  cursor:pointer;
  &:hover{
    color:orangered
  }
`;
export const Button = styled.button`

  background-color: orange;
  border: none;
  border-radius:5px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 8px;
  cursor: pointer;
  transition: all 0.8s ease;

  &:hover{
 color:aliceblue;
 text-decoration: line-through;
  }
`;

export const Card = styled.div`
display:flex;
align-items: center;
justify-content: center;
`