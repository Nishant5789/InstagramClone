import React from 'react'
import Avatarpic from '../../../assets/icons/nushrat.jpg'
import { Link } from 'react-router-dom'

export const Chatlist = () => {
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
    <Link to="/chat/123321">
    <div className='flex justify-start md:justify-center  md:flex-wrap border-b-2 hover:bg-slate-100 rounded-md p-2  items-center'>
        <div className='lg:p-4 p-2 '>
          <img src={Avatarpic} className='w-16 h-16 rounded-full' alt="" />
        </div>
        <div className='px-2'>
          <h1 className='font-semibold text-lg font-serif'>nishant</h1>
          <p className='text-sm md:hidden lg:flex'>Lorem ipsum dolor sit amet consectetur, .</p>
        </div>
    </div>
    </Link>
    <div className='flex justify-start md:justify-center  md:flex-wrap border-b-2 hover:bg-slate-100 rounded-md p-2  items-center'>
        <div className='lg:p-4 p-2 '>
          <img src={Avatarpic} className='w-16 h-16 rounded-full' alt="" />
        </div>
        <div className='px-2'>
          <h1 className='font-semibold text-lg font-serif'>nishant</h1>
          <p className='text-sm md:hidden lg:flex'>Lorem ipsum dolor sit amet consectetur, .</p>
        </div>
    </div>
    <div className='flex justify-start md:justify-center  md:flex-wrap border-b-2 hover:bg-slate-100 rounded-md p-2  items-center'>
        <div className='lg:p-4 p-2 '>
          <img src={Avatarpic} className='w-16 h-16 rounded-full' alt="" />
        </div>
        <div className='px-2'>
          <h1 className='font-semibold text-lg font-serif'>nishant</h1>
          <p className='text-sm md:hidden lg:flex'>Lorem ipsum dolor sit amet consectetur, .</p>
        </div>
    </div>
    </div>
  </div>
  )
}
