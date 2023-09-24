import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUserDetail, handleChangeProfilePic, handleModifyProfile } from './ProfileApi';

const initialState = {
    status: 'idle',
    CurrUserProfileDetail: [],
};

export const fetchUserDetailAsync = createAsyncThunk('profile/fetchUserDetailAsync', async (UserId) => {
    try {
        const { data } = await fetchUserDetail(UserId);
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
                state.CurrUserProfileDetail = action.payload;
            })
    },
});

export const selectCurrUserProfileDetail = (state) => state.profile.CurrUserProfileDetail;


export default profileSlice.reducer;
