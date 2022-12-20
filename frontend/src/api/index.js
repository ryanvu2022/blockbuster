import axios from "axios";

// Replace baseURL with API.
const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
   if (localStorage.getItem("profile")) {
      req.headers.sub = JSON.parse(localStorage.getItem("profile")).sub ? JSON.parse(localStorage.getItem("profile")).sub : JSON.parse(localStorage.getItem("profile"))._id
   }
   return req;
});

const fetchPosts = () => API.get("/posts");

const createPost = (newPost) => API.post("/posts", newPost);

const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);

const deletePost = (id) => API.delete(`/posts/${id}`);

const likePost = (id) => API.patch(`/posts/${id}/likePost`);

const signin = (inputText) => API.post("/user/signin", inputText);
const signup = (inputText) => API.post("/user/signup", inputText);

export {fetchPosts, createPost, updatePost, deletePost, likePost, signin, signup}; 