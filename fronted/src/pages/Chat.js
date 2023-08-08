import React from 'react'
import ChatNavbar from '../feature/Chat/components/ChatNavbar'
import { Chatlist } from '../feature/Chat/components/Chatlist'
import Chatpanel from '../feature/Chat/components/Chatpanel'

const Chat = () => {
  return (
    <div className='grid grid-cols-12'>
     <ChatNavbar/>
     <Chatlist/>
     <Chatpanel/>
    </div>
  )
}

export default Chat