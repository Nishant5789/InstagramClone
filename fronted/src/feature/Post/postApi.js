import axios from 'axios'

export function fetchPosts() {
     return axios.get("http://localhost:3000/posts");
}