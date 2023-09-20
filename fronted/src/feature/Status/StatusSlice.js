import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createStatus, fetchAllStatusOnHomePage } from './StatusApi';

const initialState = {
    status: 'idle',
    statusData: []
};

export const fetchAllStoryOnHomePageAsync = createAsyncThunk('status/fetchAllStatusOnHomePage', async () => {
    try {
        const { data } = fetchAllStatusOnHomePage();
        return data;
    }
    catch (err) {
        console.log(err);
    };
}
);
export const createStatusAsync = createAsyncThunk('status/createStatusAsync', async () => {
    try {
        const { data } = createStatus();
        return data;
    }
    catch (err) {
        console.log(err);
    };
}
);

export const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllStoryOnHomePageAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllStoryOnHomePageAsync.fulfilled, (state, action) => {
                state.status = 'idle';
            })
    },
});

export const selectStoryData = (state) => state.status.statusData;


export default statusSlice.reducer;
