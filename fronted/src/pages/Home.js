import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Status from '../feature/Status/components/Status'
import Posts from '../feature/Post/components/Posts'
import Notificationpanel from '../feature/Notification/components/Notificationpanel'
import FollowRequest from '../feature/Notification/components/FollowRequest'
import { Route, Routes, json, useParams } from 'react-router-dom'
import Profile from '../feature/Profile/components/Profile'



const Home = () => {
  const [isProfile, setIsProfile] = useState(false);
  // const [isStatus, setIsStatus] = useState(false);
  const RenderPath = useParams()["*"];

  useEffect(()=>{
    console.log("effect");
    if(RenderPath === 'Profile')
      setIsProfile(true);
    else
      setIsProfile(false);
  },[RenderPath])

  return (
    <div className='grid grid-cols-1 md:grid-cols-12 relative'>
      <Navbar />
      <div className={`${isProfile ? "lg:col-span-10" : "lg:col-span-6"} col-span-11  border-2`}>
        {/* <Status /> */}
        <Routes>
          <Route>
            <Route index element={<Posts />} />
            <Route path="/Notification" element={<Notificationpanel />} />
            <Route path="/Followrequest" element={<FollowRequest />} />
            <Route path="/Profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
      <div className='lg:col-span-4 hidden lg:block border-purple-600 border-2'>nishant</div>
    </div>

  )
}

export default Home