import React, { useEffect } from 'react'
import Avatarpic from '../../../assets/icons/nushrat.jpg'
import Messages from './Messages'
import ChatInput from './ChatInput'
import { Chatlist } from './Chatlist'
import { io } from "socket.io-client";
import { useDispatch } from 'react-redux'
import { getLoggeduserId } from '../../../app/constant'

const Chatpanel = ({selectedChat,selectChatId}) => {

    const dispatch = useDispatch();
    const currentUserId = getLoggeduserId();

    useEffect(() => {
        const host = "http://localhost:8080"
        if (currentUserId) {
          WebSocket.current = io(host);
          WebSocket.current.emit("add-user", currentUserId);
        }
      }, [currentUserId]);

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
                <Messages selectChatId={selectChatId} socket={WebSocket} />
                <ChatInput selectChatId={selectChatId} socket={WebSocket}/>
            </div>
        </div>
    )
}

export default Chatpanel