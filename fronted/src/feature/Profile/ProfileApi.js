import axios from "axios";

export function fetchUserDetail(UserId) {
    return axios.get(`http://localhost:8080/api/user/${UserId}`);
}

export function handleChangeProfilePic() {
    return axios.get(`http://dummy/api/`);
}

export function handleModifyProfile() {
    return axios.get(`http://dummy/api/`);
}
