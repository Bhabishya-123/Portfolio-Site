import styled from "styled-components"

export const ToggledStyle = styled.div`
.day {
    width: 50px;
    border-radius: 50px;
    margin: auto;
    background-image: linear-gradient(aqua, skyblue);
    cursor: pointer;
}

.night {
    background-image: linear-gradient(midnightblue, rebeccapurple);
}

.notch {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: yellow;
    box-shadow: 0 0 5px yellowgreen;
    transition: all 0.3s ease;
}
.night > .notch {
    background: black;
    box-shadow: 0 0 5px whitesmoke;
    transform: translate(25px, 0);
}

.shape {
    background: whitesmoke;
    border-radius: 50%;
    transition: all 0.3s ease;
}

@media only screen and (max-width: 900px)  {
    display:${(props)=>props.togDrawer===true?'inline' : 'none'}
  }
`