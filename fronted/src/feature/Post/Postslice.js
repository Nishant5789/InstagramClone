import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { commentPost, createPost, fetchAllPostsByUser, fetchAllPostsOnHomePage, likePost } from './postApi';

const initialState = {
    status: 'idle',
    userAllPosts: [],
    HomePagePosts: [],
};

export const fetchAllPostsByUserAsync = createAsyncThunk('post/fetchAllPostsByUser', async () => {
    try {
        const { data } = await fetchAllPostsByUser();
        return data;
    }
    catch (err) {
        console.log(err);
    };
}
);

export const fetchAllPostsOnHomePageAsync = createAsyncThunk('post/fetchAllPostsOnHomePage', async()=>{
    try {
        const { data } = await fetchAllPostsOnHomePage();
        return data;
    } catch (error) {
        console.log(error);
    }
})

export const createPostAsync = createAsyncThunk('post/createPostAsync', async()=>{
    try {
        const { data } = await createPost();
        return data;
    } catch (error) {
        console.log(error);
    }
})

export const handleLikePostAsync = createAsyncThunk('post/handleLikePostAsync', async()=>{
    try {
        const { data } = await likePost();
        return data;
    } catch (error) {
        console.log(error);
    }
})

export const handleCommentPostAsync = createAsyncThunk('post/handleCommentPostAsync', async()=>{
    try {
        const { data } = await commentPost();
        return data;
    } catch (error) {
        console.log(error);
    }
})



export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllPostsByUserAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllPostsByUserAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.userAllPosts = action.payload;
            })
            .addCase(fetchAllPostsOnHomePageAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllPostsOnHomePageAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.HomePagePosts = action.payload;
            });
    },
});

export const selectuserAllPosts = (state) => state.post.userAllPosts;
export const selectHomePagePosts = (state) => state.post.HomePagePosts;


export default postSlice.reducer;