import axios from "axios";
import { getLoggeduserId } from "../../app/constant";

export function fetchAllRequestByUser() {
    return axios.get(`http://localhost:8080/api/request/${getLoggeduserId()}`);
}
export function HandleSendRequest(ReceiverId, Msg) {
    return axios.post(`http://localhost:8080/api/request/createrequest/${getLoggeduserId()}/${ReceiverId}`,{Msg});
}
export function HandleModifyRequest({StatusRequest, Msg, RequestId}) {
    return axios.put(`http://localhost:8080/api/request/${getLoggeduserId()}/${RequestId}`, {StatusRequest, Msg});
}
