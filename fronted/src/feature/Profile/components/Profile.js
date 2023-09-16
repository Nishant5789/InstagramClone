import React from 'react'
import StatusPic from '../../../assets/icons/nushrat.jpg'

const Profile = () => {
  return (
    
      <div className='grid grid-rows-6 h-screen max-w-4xl mx-auto  border-2 '>
        <div className='row-span-2  grid  grid-cols-1  border-2'>
          <div className='p-4 flex items-center'>
            <img src={StatusPic} className='w-16 h-16 rounded-full' alt="" />
            <div className='p-2'>
              <h1 className='text-xl font-bold'>Nixhant133</h1>
              <ul className='flex gap-x-2'>
                <li className='px-2 py-2 bg-slate-300 rounded-md'>Following</li>
                <li className='px-2 py-2 bg-slate-300 rounded-md'>Message</li>
                <li className='px-2 py-2 bg-slate-300 rounded-md'>add</li>
              </ul>
            </div>
          </div>
          <div className='border-2 space-y   row-span-4  p-2'>
              <h1 className='font-bold'>Nishant bhandari</h1>
              <p className='p-2'> 
                Lorem ipsum dolor sit amet consectetur,  quidem excepturi!
              </p>
              <p className='text-sm font-mono'>
                Followed by saloni desai 
              </p>
          </div>
        </div>
        <div className=' row-span-5 border-2'>
          <ul className='grid grid-cols-3 my-2 space-x-2 border-2 border-stone-500 sm:max-w-md mx-2 sm:mx-auto'>
            <li className='text-center p-2 rounded-md bg-slate-200'>Posts</li>
            <li className='text-center p-2 rounded-md '>Reels</li>
            <li className='text-center p-2 rounded-md '>Tags</li>
          </ul>
          <div className='grid grid-cols-3 p-2 place-items-center gap-2'>
            <div className='w-28 h-28 md:h-48 md:w-48 border-2'>nishant1</div>
            <div className='w-28 h-28 md:h-48 md:w-48 border-2'>nishant1</div>
            <div className='w-28 h-28 md:h-48 md:w-48 border-2'>nishant1</div>
            <div className='w-28 h-28 md:h-48 md:w-48 border-2'>nishant1</div>
            <div className='w-28 h-28 md:h-48 md:w-48 border-2'>nishant1</div>
            <div className='w-28 h-28 md:h-48 md:w-48 border-2'>nishant1</div>
          </div>
        </div>
      </div>

  )
}

export default Profile