import React from 'react'
import SearchIcon from '../../../assets/icons/searchNavbar.png'


const Search = () => {
  return (
    <>
    <div className="flex flex-row">
            <div className='relative'>
            <img src={SearchIcon} className='w-5 h-5 absolute inset-y-0 left-2 top-4'  alt="" />
            <input
              type="search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border outline-none border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search"
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
            >
              Search
            </button>
            </div>
          </div>
    <div>

    </div>
    </>
  )
}

export default Search
