import axios from "axios";

export function handleSearchResponce() {
    return axios.post(`http://dummy/api/post/`);
}
