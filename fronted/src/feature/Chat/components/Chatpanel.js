import React from 'react'
import Avatarpic from '../../../assets/icons/nushrat.jpg'
import Messages from './Messages'
import ChatInput from './ChatInput'
import { Chatlist } from './Chatlist'

const Chatpanel = ({selectedChat,selectChatId}) => {

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
                {selectedChat===-1 ?
                 <div className='h-64 flex justify-center items-center'>Select UserChat</div> 
                 : <Messages selectChatId={selectChatId}/>}
               <ChatInput selectChatId={selectChatId}/>
            </div>
        </div>
    )
}

export default Chatpanel