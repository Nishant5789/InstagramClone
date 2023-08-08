import React from 'react'
import Avatarpic from '../../../assets/icons/nushrat.jpg'
import Messages from './Messages'
import ChatInput from './ChatInput'
import { Chatlist } from './Chatlist'

const Chatpanel = () => {
    return (
        <div className='col-span-10 md:col-span-9 lg:col-span-7'>
            <div className='grid h-screen md:grid-rows-6'>
                <div className='border-2 flex items-center gap-x-2 px-4 h-20  md:row-span-1'>
                    <div className="avatar">
                        <img
                            className="w-16 h-16 rounded-full"
                            src={Avatarpic}
                            alt="avatar"
                        />
                    </div>
                    <div className=" text-xl">
                        <h3>nishant1399</h3>
                    </div>
                </div>
                <Messages />
                <div className='row-span-1 flex py-4 items-center justify-center'>
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
            </div>
        </div>
    )
}

export default Chatpanel