import React from 'react'

const ChatInput = () => {
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
      className="bg-transparent flex-grow    border-none  text-lg focus:outline-none" 
      placeholder="type your message here"
    />
    <button type="submit">
    <div className='text-2xl '>
      send
    </div>
    </button>
  </form>
</div>

  )
}

export default ChatInput