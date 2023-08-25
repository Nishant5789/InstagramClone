import { configureStore } from '@reduxjs/toolkit';
import Postslice from '../feature/Post/Postslice';


const store = configureStore({
  reducer: {
    post: Postslice,
  },
});

export default store;