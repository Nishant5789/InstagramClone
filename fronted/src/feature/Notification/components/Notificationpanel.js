import React from 'react'
import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';
import Avatarpic from '../../../assets/icons/nushrat.jpg'
import { Link } from 'react-router-dom';


const Notificationpanel = () => {
  return (
    <div className='h-4/5 '>
      <h1 className='font-sans text-2xl font-semibold p-4'>Notifications</h1>
      <Link to="/Followrequest">
      <div className='flex items-center justify-between bg-slate-100 p-2 rounded-lg mx-8'>
        <ul className='flex items-center w-full justify-between gap-x-5 px-4'>
          <li className='flex items-center gap-x-4'>
            <img src={Avatarpic} className="w-16 h-16 rounded-full" alt="" />
            <h1 className=''>Follow requesets</h1>
          </li>
          <li className=''><DoubleArrowOutlinedIcon sx={{ fontSize: 60 }} /></li>
        </ul>
      </div>
      </Link>
      <h1 className='font-sans text-2xl font-semibold p-4'>This Week</h1>
      <div className='flex items-center justify-between bg-slate-100 p-2 rounded-lg mx-8'>
        <ul className='flex items-center w-full justify-between gap-x-5 px-4'>
          <li className='flex items-center gap-x-4'>
            <img src={Avatarpic} className="w-16 h-16 rounded-full" alt="" />
            <h1 className=''>hardik101 Liked your post <span className='text-sm font-light'>2w</span></h1>
          </li>
          <img src="" alt="" />
        </ul>
      </div>
      <h1 className='font-sans text-2xl font-semibold p-4'>Earlier</h1>
      <div className='flex items-center justify-between bg-slate-100 p-2 rounded-lg mx-8'>
        <ul className='flex items-center w-full justify-between gap-x-5 px-4'>
          <li className='flex items-center gap-x-4'>
            <img src={Avatarpic} className="w-16 h-16 rounded-full" alt="" />
            <h1 className=''>Rahane124 stared following you. <span className='text-sm font-light'>2w</span></h1>
          </li>
          <img src="" alt="" />
        </ul>
      </div>
    </div>
  )
}

export default Notificationpanel