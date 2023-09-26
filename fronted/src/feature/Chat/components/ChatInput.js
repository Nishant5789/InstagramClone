import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { handleSendMsgAsync } from '../ChatSlice';

const ChatInput = ({selectChatId}) => {

  const [ChatMsgInput, setChatMsgInput] = useState('');
  const dispatch = useDispatch();

  const handleSendMsg = ()=>{
    dispatch(handleSendMsgAsync());
  }

  return (
    <div className='flex py-4 items-center justify-center '>
    <div className="h-10">
        <div className="text-4xl flex-col px-2">
          {/* <BsEmojiSmileFill className='' onClick={handleEmojiPickerhideShow}  />
          {showEmojiPicker && <Picker  onEmojiClick={handleEmojiClick} />} */}
          temp
        </div>
  </div>
  <form className="w-full rounded-2xl flex h-10 px-2  bg-opacity-20" >
    <input
      type="text"
      onChange={(e)=>setChatMsgInput(e.target.value)}
      value={ChatMsgInput}
      className="bg-transparent flex-grow    border-none  text-lg focus:outline-none" 
      placeholder="type your message here"
    />
    <button type="submit">
    <div onClick={handleSendMsg} className='text-2xl '>
      send
    </div>
    </button>
  </form>
</div>

  )
}

export default ChatInput