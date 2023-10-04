import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleSendMsgAsync } from '../ChatSlice';
import { selectLoggedInUserId } from '../../Profile/ProfileSlice';

const ChatInput = ({ selectChatId , socket}) => {

  const [ChatMsgInput, setChatMsgInput] = useState('');
  const CurrLoggedUserId = useSelector(selectLoggedInUserId);


  const dispatch = useDispatch();
  
  const getReceiverUserId = ()=>{
    const middleIndex = Math.floor(selectChatId.length / 2);

    const firstPart = selectChatId.slice(0, middleIndex);
    const secondPart = selectChatId.slice(middleIndex);

    return CurrLoggedUserId!==firstPart ? firstPart:secondPart;
  }

  const handleSendMsg = () => {

    const chatData = {
      SenderUserId: CurrLoggedUserId,
      ReceiverUserId: getReceiverUserId(),
      ContentMessage: ChatMsgInput,
      ContentType: "text",
      ChatId: selectChatId
    }
    socket.current.emit("send-msg", chatData);

    dispatch(handleSendMsgAsync({
      chatData,
      ChatId: selectChatId
    }));
    setChatMsgInput('');
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
      <div className="w-full rounded-2xl flex h-10 px-2  bg-opacity-20" >
        <input
          type="text"
          onChange={(e) => setChatMsgInput(e.target.value)}
          value={ChatMsgInput}
          className="bg-transparent flex-grow    border-none  text-lg focus:outline-none"
          placeholder="type your message here"
        />
        <button>
          <div onClick={handleSendMsg} className='text-2xl '>
            send
          </div>
        </button>
      </div>
    </div>

  )
}

export default ChatInput