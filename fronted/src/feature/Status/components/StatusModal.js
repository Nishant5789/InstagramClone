import React from 'react'

const StatusModal = () => {
  return (
    <div className='absolute inset-0 shadow-2xl bg-opacity-40 backdrop-blur-sm'>
    <div className='grid  grid-cols-12 h-screen'>
        <div className='m-auto col-span-2'>
            <img src={LeftArrow} alt="" className='w-10 h-10'/>
        </div>
        <div className='col-span-8 my-auto flex flex-col justify-center gap-y-4 items-center  shadow-xl p-4'>
            <div className='flex items-center w-full  gap-x-2'>
                <img src={Sampleavatar} className='w-16 h-16' alt="" />
                <h1>Nishant123</h1>
                <p className='text-sm'>4h</p>
            </div>
            <div className='space-y-3 w-4/5 h-4/5 md:w-2/3 md:h-1/4'>
            <img src={StatusPic} className='mx-auto sm:h-64 md:h-96 object-contain'  alt="" />
            <input type="text" className='bg-transparent border-2 p-2 w-11/12 rounded-lg pr-6 text-black placeholder:text-stone-600 border-white' placeholder='reply to nishant'/>
            {/* <button className='absolute  bottom-1 right-6 md:top-0 md:right-0'> 
                <img src={SendMsg} alt="" className='w-8 h-8 ' />
            </button> */}
            </div>
        </div>
        <div className='m-auto col-span-2'>
            <img src={RightArrow} alt="" className='w-10 h-10'/>
        </div>

    </div>
    </div>
  )
}

export default StatusModal