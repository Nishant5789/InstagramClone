import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HandleModifyRequest, HandleSendRequest, fetchAllRequestByUser } from './notificationApi';

const initialState = {
    status: 'idle',
    allRequestForUser: [],
};

export const fetchAllRequestByUserAsync = createAsyncThunk('notifications/fetchAllRequestByUserAsync', async () => {
    try {
        const { data } = fetchAllRequestByUser();
        return data;
    }
    catch (err) {
        console.log(err);
    };
}
);
export const HandleSendRequestAsync = createAsyncThunk(
    'notifications/HandleSendRequestAsync', async () => {
    try {
        const { data } = HandleSendRequest();
        return data;
    }
    catch (err) {
        console.log(err);
    };
}
);
export const HandleModifyRequestAsync = createAsyncThunk(
    'notifications/HandleModifyRequestAsync', async () => {
    try {
        const { data } = HandleModifyRequest();
        return data;
    }
    catch (err) {
        console.log(err);
    };
}
);

export const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllRequestByUserAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllRequestByUserAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.allRequestForUser = action.payload;
            })
    },
});

export const selectAllRequestForUser = (state) => state.notification.allRequestForUser;


export default notificationSlice.reducer;
