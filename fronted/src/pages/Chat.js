import React, { useState } from 'react'
import ChatNavbar from '../feature/Chat/components/ChatNavbar'
import { Chatlist } from '../feature/Chat/components/Chatlist'
import Chatpanel from '../feature/Chat/components/Chatpanel'

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(-1);
  const [selectChatId, setSelectChatId] = useState(null);

  return (
    <div className='grid grid-cols-12'>
     <ChatNavbar/>
     <Chatlist  setSelectChatId={setSelectChatId} setSelectedChat={setSelectedChat} />
     <Chatpanel selectedChat={selectedChat} selectChatId={selectChatId}/>
    </div>
  )
}

export default Chat