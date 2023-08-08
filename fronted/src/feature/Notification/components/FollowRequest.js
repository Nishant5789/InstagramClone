import React from 'react'
import Avatarpic from '../../../assets/icons/nushrat.jpg'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';


const FollowRequest = () => {
  return (
    <div className='h-4/5'>
    <div className='flex items-center px-4 gap-x-4'>
    <Link to="/Notification">
    <ArrowBackIosNewIcon sx={{ fontSize: 60 }} className='bg-slate-200 rounded-full p-4'/>
    </Link>
    <h1 className='font-sans text-2xl font-semibold px-8 py-4'>follow Request</h1>
    </div> 
    <div className=''>
    <div className='flex border-b-2 items-center justify-between  p-2 rounded-lg mx-8'>
        <ul className='flex items-center w-full  gap-x-5 px-4'>
            <img src={Avatarpic} className="w-16 h-16 rounded-full" alt="" />
            <li className=''>
                <h1 className=''>jassi30232</h1>
                <p className='text-gray-500'>japrit bumrah</p>
            </li>
        </ul>
        <ul className='flex gap-x-2'>
            <li className='bg-blue-500  px-4 py-2 text-white rounded-md'>Confirm</li>
            <li className='bg-slate-200 px-4 py-2 rounded-md'>Delete</li>
        </ul>
      </div>
      <div className='flex border-b-2 items-center justify-between  p-2 rounded-lg mx-8'>
        <ul className='flex items-center w-full  gap-x-5 px-4'>
            <img src={Avatarpic} className="w-16 h-16 rounded-full" alt="" />
            <li className=''>
                <h1 className=''>jassi30232</h1>
                <p className='text-gray-500'>japrit bumrah</p>
            </li>
        </ul>
        <ul className='flex gap-x-2'>
            <li className='bg-blue-500  px-4 py-2 text-white rounded-md'>Confirm</li>
            <li className='bg-slate-200 px-4 py-2 rounded-md'>Delete</li>
        </ul>
      </div>
      <div className='flex border-b-2 items-center justify-between  p-2 rounded-lg mx-8'>
        <ul className='flex items-center w-full  gap-x-5 px-4'>
            <img src={Avatarpic} className="w-16 h-16 rounded-full" alt="" />
            <li className=''>
                <h1 className=''>jassi30232</h1>
                <p className='text-gray-500'>japrit bumrah</p>
            </li>
        </ul>
        <ul className='flex gap-x-2'>
            <li className='bg-blue-500  px-4 py-2 text-white rounded-md'>Confirm</li>
            <li className='bg-slate-200 px-4 py-2 rounded-md'>Delete</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default FollowRequest