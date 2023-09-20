import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import SinglePost from './SinglePost'
import { fetchAllPostsByUserAsync, selectuserAllPosts } from '../Postslice';
import { useEffect } from 'react';
import { getLoggeduserId } from '../../../app/constant';


const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectuserAllPosts);

  // console.log(posts);

  useEffect(()=>{
      dispatch(fetchAllPostsByUserAsync());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <>
    <div className='space-y-6'>
      {
        posts.map((post) => {
          return <SinglePost post={post} key={post.id}/>
        })
      }
    </div>
    {/* <Postmodal/> */}
    </>
  )
}

export default Posts