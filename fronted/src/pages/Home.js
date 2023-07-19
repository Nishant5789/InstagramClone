import React from 'react'
import Navbar from '../feature/Navbar/components/Navbar'

const Home = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-12'>   
      <Navbar/>
      
      <div className='lg:col-span-6 col-span-11 border-purple-600 border-2'>nishant</div>    
      <div className='lg:col-span-4 hidden lg:block border-purple-600 border-2'>nishant</div>    
    </div>

  )
}

export default Home