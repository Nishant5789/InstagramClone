import React, { useEffect, useState } from 'react'
import Avatarpic from '../../../assets/icons/nushrat.jpg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUserChatsAsync, selectAllUserChats } from '../ChatSlice';
import { getLoggeduserId } from '../../../app/constant';

export const Chatlist = ({setSelectChatId, setSelectedChat}) => {
  const dispatch = useDispatch();
  const AllUserChats = useSelector(selectAllUserChats);

  function getChatId(str1, str2) {
    if (str1 < str2) {
      return str1 + str2;
    } else {
      return str2 + str1;
    }
  }

  const handleselectUserchats = (Number, UserID)=>{
    setSelectedChat(Number);
    setSelectChatId(getChatId(getLoggeduserId(), UserID));
  }

  useEffect(() => {
    dispatch(fetchAllUserChatsAsync());
  }, []);

  return (
    <div className='border-2  md:flex col-span-12 flex-col h-screen border-purple-500 md:col-span-2 lg:col-span-4'>
      <div className='p-6 border-b-2  space-y-3'>
        <h1 className='lg:text-2xl font-semibold text-center lg:text-left  font-sans'>nishant1399</h1>
      </div>
      <ul className='md:hidden flex  lg:flex lg:px-6 py-2 justify-around items-center'>
        <li className='text-2xl font-serif font-semibold '>Messages</li>
        <li className='text-xl text-cyan-600 font-semibold'>7 Request</li>
      </ul>
      <div className='h-3/4 mb-2 max-w-xl mx-auto overflow-scroll'>
        {
          AllUserChats.map(({UserName, ProfilePhoto, UserID}, index) => {

            return (<div onClick={()=>handleselectUserchats(index, UserID)} className='flex justify-start md:justify-center  md:flex-wrap border-b-2 hover:bg-slate-100 rounded-md p-2  items-center'>
              <div className='lg:p-4 p-2 '>
                <img src={ProfilePhoto} className='w-16 h-16 rounded-full' alt="" />
              </div>
              <div className='px-2'>
                <h1 className='font-semibold text-lg font-serif'>{UserName}</h1>
                <p className='text-sm md:hidden lg:flex'>Lorem ipsum dolor sit amet consectetur, .</p>
              </div>
            </div>);
          })
        }
        {/* <Link to="/chat/123321">

    </Link> */}
      </div>
    </div>
  )
}
