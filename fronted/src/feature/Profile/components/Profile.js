import React, { useEffect, useState } from 'react'
import StatusPic from '../../../assets/icons/nushrat.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserDetailAsync, selectCurrUserProfileDetail } from '../ProfileSlice'
import { getLoggeduserId } from '../../../app/constant'
import { HandleSendRequestAsync } from '../../Notification/notificationSlice'

const Profile = () => {
  const dispatch = useDispatch();
  const CurrUserProfile = useSelector(selectCurrUserProfileDetail);
  const [ChooseButton, setButton] = useState("Send Request");

  const {UserName, FirstName, LastName, ProfilePhoto, AllPost ,Gender, Bio, DoB, Email, AccType, FollowingUser, BlockedUser, Request ,FollowersUser, id:UserID } = CurrUserProfile;

  const handleButton = ()=>{
    if(ChooseButton==="Send Request"){
      dispatch(HandleSendRequestAsync( {
        ReceiverId:UserID,
        Msg:`${getLoggeduserId()} requested to follow you`
      }));
      setTimeout(()=>dispatch(fetchUserDetailAsync(UserID)),1000);
    }
  }
  
  useEffect(()=>{
    let RequestedUser = [];
    // console.log(Request);
    if(Request!==undefined){
      RequestedUser =  Request.map((Req)=>{
        return Req.RequestSenderUser;
      })
    }

    const IsFollowing = FollowingUser && FollowingUser.includes(getLoggeduserId());
    const IsFollower = FollowersUser && FollowersUser.includes(getLoggeduserId());
    const IsRequestedUser = RequestedUser && RequestedUser.includes(getLoggeduserId());

    
    // console.log({IsFollower,IsFollowing,  IsRequestedUser});
    if(IsRequestedUser){
      setButton("Pending");
    }
    if(IsFollower && IsFollowing){
      setButton("Following");
    }
    else if (IsFollowing && !IsFollower){
      setButton("Follow Back");
    }
  },[FollowingUser, FollowersUser, Request])

  return (
      <div className='grid grid-rows-6 min-h-screen max-w-4xl mx-auto  border-2 '>
        <div className='row-span-2  grid  grid-cols-1  border-2'>
          <div className='p-4 flex items-center'>
            <img src={ProfilePhoto} className='w-16 h-16 rounded-full' alt="" />
            <div className='p-2'>
              <h1 className='text-xl font-bold'>{UserName}</h1>
              <ul className='flex gap-x-2'>
                <li onClick={handleButton} className='px-2 py-2 bg-purple-600 active:bg-purple-400 text-white rounded-md'>{ChooseButton}</li>
                {ChooseButton==="Following" && <li className='px-2 py-2 bg-red-600 active:bg-red-500 text-white rounded-md'>UnFollow</li>}
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