import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HandleModifyRequest, HandleSendRequest, fetchAllRequestByUser } from './notificationApi';
import { SendMessage, fetchAllUserChats } from './ChatApi';

const initialState = {
    status: 'idle',
    allUserChats: [],
    currChatMsg: []
};

export const fetchAllUserChatsAsync = createAsyncThunk('chats/fetchAllUserChatsAsync', async () => {
    try {
        const { data } = await fetchAllUserChats();
        return data;
    }
    catch (err) {
        console.log(err);
    };
}
);
export const handleSendMsgAsync = createAsyncThunk('chats/handleSendMsgAsync', async (chatData) => {
    try {
        const { data } = await SendMessage(chatData);
        return data;
    }
    catch (err) {
        console.log(err);
    };
}
);
export const fetchChatMsgAsync = createAsyncThunk('chats/fetchChatMsgAsync', async (chatData) => {
    try {
        const { data } = await fetchChatMsg(chatData);
        return data;
    }
    catch (err) {
        console.log(err);
    };
}
);


export const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUserChatsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllUserChatsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.allUserChats = action.payload;
            })
            .addCase(handleSendMsgAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(handleSendMsgAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.currChatMsg.push(action.payload);
            })
            .addCase(fetchChatMsgAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchChatMsgAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.currChatMsg = action.payload;
            })
    },
});

export const selectAllUserChats = (state) => state.chat.allUserChats;
export const selectCurrChatMsg = (state) => state.chat.currChatMsg;


export default chatsSlice.reducer;
