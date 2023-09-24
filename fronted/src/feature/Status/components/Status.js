import React, { useEffect, useState } from 'react'
import Sampleavatar from '../../../assets/icons/Sampleavatar.png'
import AddLogo from '../../../assets/icons/AddLogo.png'
import StatusModal from './StatusModal'
import StatusUploadModal from './StatusUploadModal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllStoryOnHomePageAsync, selectCurrStatus, selectStoryData } from '../StatusSlice';

const Status = () => {
    const dispatch = useDispatch();
    const [isOpenStatus, SetIsopenStatus] = useState(false);
    const CurrLoggedUserStatus = useSelector(selectCurrStatus);
    const StoryData = useSelector(selectStoryData);

    useEffect(() => {
        dispatch(fetchAllStoryOnHomePageAsync())
    })

    return (
        <>
            <div className='flex  sm:mx-8 z-0 border-b-2 justify-between items-center overflow-hidden overflow-x-scroll sm:gap-x-4 gap-x-6 pt-4 pb-2 sm:px-0 px-4'>
                {CurrLoggedUserStatus === null ? <div onClick={() => SetIsopenStatus(!isOpenStatus)}
                    className='sm:w-20 ml-2 sm:h-24 w-16 h-20 flex-col items-center justify-center'>
                    <img src={AddLogo} className=' object-contain ring-2  p-1 ring-pink-700 rounded-full' alt="" />
                    <h1 className='text-center font-semibold'>Upload</h1>
                </div> : null}
                {
                    StoryData && StoryData.map(({StoryPath, User})=>{
                        return (
                        <div className='sm:w-20 sm:h-24 w-16 h-20 flex-col items-center justify-center'>
                            <img src={StoryPath} className=' object-cover ring-2  p-1 ring-pink-700 rounded-full' alt="" />
                            <h1 className='text-center font-semibold'>{}</h1>
                        </div>
                        )
                    })
                }  
            </div>
            {/* <StatusModal/>   */}
            {
                isOpenStatus && <StatusUploadModal SetIsopenStatus={SetIsopenStatus} />
            }
        </>
    )
}

export default Status