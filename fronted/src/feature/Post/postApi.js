import axios from 'axios'

export function fetchPosts() {
     return axios.get("https://dummyjson.com/posts");
}