import React from 'react'
import Navbar from '../Components/Navbar'
import Status from '../feature/Status/components/Status'
import Posts from '../feature/Post/components/Posts'



const Home = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-12 relative'>
      <Navbar />
      <div className='lg:col-span-6 col-span-11  border-2'>
        <Status />
        <Posts/>
      </div>
      <div className='lg:col-span-4 hidden lg:block border-purple-600 border-2'>nishant</div>
    </div>

  )
}

export default Home