import axios from "axios";
import { getLoggeduserId } from "../../app/constant";

export function fetchAllUserChats() {
    return axios.get(`http://localhost:8080/api/chat/${getLoggeduserId()}`);
}

export function SendMessage(chatData, ChatId) {
    return axios.post(`http://localhost:8080/api/chat/${ChatId}`, chatData);
}

export function fetchChatMsg(ChatId) {
    return axios.get(`http://localhost:8080/api/chat/${ChatId}`);
}


