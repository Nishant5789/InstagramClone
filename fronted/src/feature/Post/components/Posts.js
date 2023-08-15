import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import SinglePost from './SinglePost'
import { fetchPostAsync, selectposts } from '../Postslice';
import Postmodal from './Postmodal';


const Posts = () => {

  const dispatch = useDispatch();
  const posts = useSelector(selectposts);

  console.log(posts);

  useEffect(() => {
    dispatch(fetchPostAsync());
  }, []);


  return (
    <>
    <div className='space-y-6'>
      {
        posts.map((post) => {
          return <SinglePost post={post}/>
        })
      }
    </div>
    {/* <Postmodal/> */}
    </>
  )
}

export default Posts