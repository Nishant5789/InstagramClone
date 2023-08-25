import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from './postApi';

const initialState = {
    status: 'idle',
    posts: [],
};

export const fetchPostAsync = createAsyncThunk('post/fetchPost', async () => {
        const {data} = await fetchPosts();
        return data;
    }
);

export const postSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPostAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchPostAsync.fulfilled, (state, action) => {
          state.status = 'idle';
          state.posts = action.payload;
        });
      },
    });

export const selectposts = (state)=>state.post.posts;


export default postSlice.reducer;