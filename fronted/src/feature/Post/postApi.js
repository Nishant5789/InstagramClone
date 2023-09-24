import axios from 'axios'
import { getLoggeduserId } from '../../app/constant';

export function fetchAllPostsByUser() {
     return axios.get(`http://localhost:8080/api/post/${getLoggeduserId()}`);
}

export function fetchAllPostsOnHomePage() {
     return axios.get(`http://dummy/api/post/${getLoggeduserId()}`);
}

export function createPost(postObject) {
     return axios.post(`http://localhost:8080/api/post/createpost/${getLoggeduserId()}`,postObject);
}

export function likePost(postId) {
     return axios.put(`http://localhost:8080/api/post/like/${getLoggeduserId()}/${postId}`);
}

export function commentPost({PostID,Commentcontent}) {
     // console.log(Commentcontent);
     return axios.post(`http://localhost:8080/api/post/comment/${getLoggeduserId()}/${PostID}`,{Commentcontent});
}

export function deletePost(postId) {
     return axios.delete(`http://localhost:8080/api/post/${getLoggeduserId()}/${postId}`);
}


