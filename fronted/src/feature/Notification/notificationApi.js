import axios from "axios";
import { getLoggeduserId } from "../../app/constant";

export function fetchAllRequestByUser() {
    return axios.get(`http://dummy/api/post/${getLoggeduserId()}`);
}
export function HandleSendRequest() {
    return axios.post(`http://dummy/api/post/${getLoggeduserId()}`);
}
export function HandleModifyRequest() {
    return axios.put(`http://dummy/api/post/${getLoggeduserId()}`);
}
