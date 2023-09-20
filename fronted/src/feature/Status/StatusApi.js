import axios from "axios";

export function fetchAllStatusOnHomePage() {
    return axios.get(`http://dummy/api/post/}`);
}

export function createStatus() {
    return axios.post(`http://dummy/api/post/}`);
}
