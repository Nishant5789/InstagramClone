import { configureStore } from '@reduxjs/toolkit';
import Postslice from '../feature/Post/Postslice';
import NotificationSlice from '../feature/Notification/notificationSlice';
import SearchSlice from '../feature/Search/SearchSlice';
import StorySlice from '../feature/Status/StatusSlice';
import ProfileSlice from '../feature/Profile/ProfileSlice';


const store = configureStore({
  reducer: {
    post: Postslice,
    notification: NotificationSlice, 
    search: SearchSlice, 
    status: StorySlice,
    profile: ProfileSlice
  },
});

export default store;