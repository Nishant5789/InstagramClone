import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchChatMsgAsync, selectCurrChatMsg } from '../ChatSlice';
import { getLoggeduserId } from '../../../app/constant';

const Messages = ({ selectChatId }) => {
  const dispatch = useDispatch();
  const CurrMsgData = useSelector(selectCurrChatMsg);

  useEffect(() => {
    dispatch(fetchChatMsgAsync(selectChatId));
  }, []);

  return (
    <div className='overflow-scroll mx-2 row-span-4'>
      {
        CurrMsgData.map(({SenderUserId, ContentMessage, ContentType, ChatId}) => {
          return (
            <div className="flex my-4 justify-start">
              {/* // rounded-r-lg rounded-bl-lg  || rounded-l-lg rounded-br-lg */}
              <div className="rounded-r-lg rounded-bl-lg bg-purple-600 max-w-[20rem] text-white shadow-md shadow-slate-500 hover:bg-purple-500  px-3 py-2">
                <p>{ContentMessage}</p>
              </div>
            </div>
          )
        })
      }


      <div className="flex my-4 justify-end">
        {/* // rounded-r-lg rounded-bl-lg  || rounded-l-lg rounded-br-lg */}
        <div className="rounded-l-lg rounded-br-lg
    bg-purple-600 max-w-[20rem] text-white shadow-md shadow-slate-500 hover:bg-purple-500  px-3 py-2">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci eaque praesentium ipsum est tenetur amet, culpa numquam ad facere atque at aliquid. Cupiditate corrupti reprehenderit ea, delectus tenetur magnam ducimus vel accusamus nulla sed quia rem veniam animi libero vero.</p>
        </div>
      </div>
      <div className="flex my-4 justify-end">
        {/* // rounded-r-lg rounded-bl-lg  || rounded-l-lg rounded-br-lg */}
        <div className="rounded-l-lg rounded-br-lg
    bg-purple-600 max-w-[20rem] text-white shadow-md shadow-slate-500 hover:bg-purple-500  px-3 py-2">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci eaque praesentium ipsum est tenetur amet, culpa numquam ad facere atque at aliquid. Cupiditate corrupti reprehenderit ea, delectus tenetur magnam ducimus vel accusamus nulla sed quia rem veniam animi libero vero.</p>
        </div>
      </div>
      <div className="flex my-4 justify-end">
        {/* // rounded-r-lg rounded-bl-lg  || rounded-l-lg rounded-br-lg */}
        <div className="rounded-l-lg rounded-br-lg
    bg-purple-600 max-w-[20rem] text-white shadow-md shadow-slate-500 hover:bg-purple-500  px-3 py-2">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci eaque praesentium ipsum est tenetur amet, culpa numquam ad facere atque at aliquid. Cupiditate corrupti reprehenderit ea, delectus tenetur magnam ducimus vel accusamus nulla sed quia rem veniam animi libero vero.</p>
        </div>
      </div>
    </div>
  )
}

export default Messages