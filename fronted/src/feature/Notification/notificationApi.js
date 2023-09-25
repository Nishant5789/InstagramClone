import axios from "axios";
import { getLoggeduserId } from "../../app/constant";

export function fetchAllRequestByUser() {
    return axios.get(`http://localhost:8080/api/request/${getLoggeduserId()}`);
}
export function HandleSendRequest(RecevierUserId, RequestData) {
    return axios.post(`http://localhost:8080/api/request/createrequest/${getLoggeduserId()}/${RecevierUserId}`,RequestData);
}
export function HandleModifyRequest(RequestId) {
    return axios.put(`http://localhost:8080/api/request/${getLoggeduserId()}/${RequestId}`);
}
