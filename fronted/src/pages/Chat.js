import React from 'react'
import ChatNavbar from '../feature/Chat/components/ChatNavbar'
import { Chatlist } from '../feature/Chat/components/Chatlist'


const Chat = () => {
  return (
    <div className='grid grid-cols-12'>
     <ChatNavbar/>
     <Chatlist/>
    <div className='border-2 h-screen border-purple-500 col-span-10 md:col-span-9 lg:col-span-7'></div>
  </div>
  )
}

export default Chat