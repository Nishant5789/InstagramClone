import axios from "axios";
import { getLoggeduserId } from "../../app/constant";

export function fetchAllStatusOnHomePage() {
    return axios.get(`http://localhost:8080/api/story/getstorybyfollowinguser/${getLoggeduserId()}`);
}

export function createStatus(StatusData) {
    return axios.post(`http://localhost:8080/api/story/createstory/${getLoggeduserId()}`, StatusData);
}
