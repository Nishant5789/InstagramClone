import React from 'react'
import Sampleavatar from '../../../assets/icons/Sampleavatar.png'
import StatusPic from '../../../assets/icons/nushrat.jpg'
import HeartLogo from '../../../assets/icons/heartLogo.png'
import SendMsg from '../../../assets/icons/sendMsg.png'
import Commenticon from '../../../assets/icons/Commenticon.png'
import SaveInstagram from '../../../assets/icons/save-instagram.png'

const SinglePost = ({post}) => {
    const {Username, PostPath} = post;

    return (
        <div className='sm:w-2/3  mx-auto rounded-lg'>  
            <div className='flex items-center  py-2 px-4 gap-x-2'>
                <img src={Sampleavatar} className='w-16  h-16' alt="" />
                <h1>{Username}</h1>
                <p className='text-sm flex-grow'>4h</p>
                <span>&#183; &#183; &#183;</span>
            </div>
            <div className='h-3/4  flex justify-center bg-slate-100'>
                <img src={PostPath} alt="" className='' />
            </div>
            <ul className='flex  mt-2 px-4 gap-x-2'>
                <li >
                    <img src={HeartLogo} className='w-8 h-8' alt="" />
                </li>
                <li >
                    <img src={Commenticon} className='w-8 h-8' alt="" />
                </li>
                <li className='flex-grow'>
                    <img src={SendMsg} className='w-8 h-8' alt="" />
                </li>
                <li className=''>
                    <img src={SaveInstagram} className='w-8 h-8' alt="" />
                </li>
            </ul>
            <ul className='space-y-2 px-2'>
                <li className='text-sm'>
                    <span className='font-bold'>Virat121</span> Between the sky of hope...
                </li>
                <li className='text-sm text-gray-400'>
                    View all 303 comments
                </li>
                <ul>
                    <li>
                        <span className='font-bold'>dhoni34</span> tremendious batting...
                    </li>
                    <li>
                        <span className='font-bold'>dhoni34</span> tremendious batting...
                    </li>
                </ul>
            </ul>
        </div>
    )
}

export default SinglePost