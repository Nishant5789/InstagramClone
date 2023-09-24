import React, { useEffect, useState } from 'react'
import StatusPic from '../../../assets/icons/nushrat.jpg'
import { useSelector } from 'react-redux'
import { selectCurrUserProfileDetail } from '../ProfileSlice'
import { getLoggeduserId } from '../../../app/constant'

const Profile = () => {
  const CurrUserProfile = useSelector(selectCurrUserProfileDetail);
  const [ChooseButton, setButton] = useState("Send Request");

  const {UserName, FirstName, LastName, ProfilePhoto, AllPost ,Gender, Bio, DoB, Email, AccType, FollowingUser, BlockedUser, FollowersUser } = CurrUserProfile;
  
  useEffect(()=>{
    const IsFollowing = FollowingUser && FollowingUser.includes(getLoggeduserId());
    const IsFollower = FollowersUser && FollowersUser.includes(getLoggeduserId());
    
    console.log({IsFollower,IsFollowing });
    if(IsFollower && IsFollowing){
      setButton("Following")
    }
    else if (IsFollowing && !IsFollower){
      setButton("Follow Back")
    }
  },[FollowingUser, FollowersUser])

  return (
      <div className='grid grid-rows-6 min-h-screen max-w-4xl mx-auto  border-2 '>
        <div className='row-span-2  grid  grid-cols-1  border-2'>
          <div className='p-4 flex items-center'>
            <img src={ProfilePhoto} className='w-16 h-16 rounded-full' alt="" />
            <div className='p-2'>
              <h1 className='text-xl font-bold'>{UserName}</h1>
              <ul className='flex gap-x-2'>
                <li className='px-2 py-2 bg-slate-300 rounded-md'>{ChooseButton}</li>
              </ul>
            </div>
          </div>
          <div className='border-2 space-y   row-span-4  p-2'>
              <h1 className='font-bold'>{FirstName} {LastName}</h1>
              <p className='p-2'> 
                {Bio}
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
          <div className='grid grid-cols-3 p-2 place-items-center gap-4 '>
            {
              AllPost && AllPost.map(({PostType, Comment, Caption, PostPath, UserId, LikedByUsers, TotalLikes, id: postID })=>{
                return (
                  <div className='w-28 h-28 md:h-48 md:w-48 border-2'>
                    <img src={PostPath} className='object-cover' alt="" />
                  </div>
                )
               })
            }
          </div>
        </div>
      </div>

  )
}

export default Profile