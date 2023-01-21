import React from 'react'
import {ChatgptWrapper, InitialChatgpt, MessageChatgpt} from './Chatgpt.Styled'

function Chatgpt() {
  return (
    <ChatgptWrapper>
     <InitialChatgpt><span style={{transform:'rotate(90deg)',margin:'0',padding:'0',background:'orange',position:'relative'}}>ChatBot</span></InitialChatgpt>
     <MessageChatgpt></MessageChatgpt>
    </ChatgptWrapper>
  )
}

export default Chatgpt