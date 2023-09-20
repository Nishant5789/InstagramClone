import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { handleSearchResponce } from './SearchApi';

const initialState = {
    status: 'idle', 
    searchData: []
};

export const handleSearchResponceAsync = createAsyncThunk('search/handleSearchResponceAsync', async () => {
    try {
        const { data } = handleSearchResponce();
        return data;
    }
    catch (err) {
        console.log(err);
    };
}
);

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(handleSearchResponceAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(handleSearchResponceAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.allRequestForUser = action.payload;
            })
    },
});

export const selectSearchData= (state) => state.search.searchData;

export default searchSlice.reducer;
