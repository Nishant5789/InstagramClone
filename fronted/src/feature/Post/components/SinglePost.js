import React, { useEffect, useState } from 'react'
import Sampleavatar from '../../../assets/icons/Sampleavatar.png'
import temp from '../../../assets/posts/nishant123_post_1.jpg'
import StatusPic from '../../../assets/icons/nushrat.jpg'
import HeartLogo from '../../../assets/icons/heartLogo.png'
import SendMsg from '../../../assets/icons/sendMsg.png'
import Commenticon from '../../../assets/icons/Commenticon.png'
import SaveInstagram from '../../../assets/icons/save-instagram.png'
import { getLoggeduserId } from '../../../app/constant'

const SinglePost = ({ post }) => {
    console.log(post);
    const { PostType, Comment, PostPath, UserId, LikedByUsers, TotalLikes, id } = post;
    const { UserName, FirstName, LastName, ProfilePhoto } = UserId;

    const [isLiked, setIsLiked] = useState(false);
    
    useEffect(()=>{
        if(LikedByUsers.includes(getLoggeduserId()))
            setIsLiked(!isLiked);
    },[isLiked])
    
    return(
    <div className='sm:w-2/3  mx-auto rounded-lg'>
        <div className='flex items-center  py-2 px-4 gap-x-2'>
        {/* */}
            <img src= {ProfilePhoto}  className='w-16 rounded-full h-16' alt="" />
            <h1>{UserName}</h1>
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
        <div className='px-4 py-2 font-bold'><span>{TotalLikes}</span> Likes</div>
        <ul className='space-y-2 px-2'>
            <li className='text-sm'>
                <span className='font-bold'>{UserName}</span> Between the sky of hope...
            </li>
            <li className='text-sm text-gray-400'>
                View all {Comment.length} comments
            </li>
            <ul>
                {
                    Comment.map((commentItem, index)=>{
                        const {CommentContent, CommentedBy} = commentItem;
                        return (
                        <li>
                            <span className='font-bold pr-2'>{CommentedBy.UserName}</span>{CommentContent}...
                        </li>
                        )
                    })
                }
            </ul>
        </ul>
    </div>
    )
}

export default SinglePost