import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`
 *{
   font-family:cursive;
   box-sizing: border-box;
   padding: 0;
   margin: 0;
   background:${(props)=>props.toggled===true?props.theme.dark.background : '<></>'};
   color:${(props)=>props.toggled===true?props.theme.dark.color : props.theme.light.color}
 }
`
