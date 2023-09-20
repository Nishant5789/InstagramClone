import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUserDetail, handleChangeProfilePic, handleModifyProfile } from './ProfileApi';

const initialState = {
    status: 'idle',
    userDetail: [],
};

export const fetchUserDetailAsync = createAsyncThunk('profile/fetchUserDetailAsync', async () => {
    try {
        const { data } = fetchUserDetail();
        return data;
    }
    catch (err) {
        console.log(err);
    };
}
);

export const handleChangeProfilePicAsync = createAsyncThunk('profile/handleChangeProfilePicAsync', async () => {
    try {
        const { data } = handleChangeProfilePic();
        return data;
    }
    catch (err) {
        console.log(err);
    };
}
);

export const handleModifyProfileAsync = createAsyncThunk('profile/handleModifyProfileAsync', async () => {
    try {
        const { data } = handleModifyProfile();
        return data;
    }
    catch (err) {
        console.log(err);
    };
}
);

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserDetailAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUserDetailAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.userDetail = action.payload;
            })
    },
});

export const selectUserDetail = (state) => state.profile.userDetail;


export default profileSlice.reducer;
