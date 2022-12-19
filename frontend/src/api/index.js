import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

const fetchPosts = () => API.get("/posts");

const createPost = (newPost) => API.post("/posts", newPost);

const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);

const deletePost = (id) => API.delete(`/posts/${id}`);

const likePost = (id) => API.patch(`/posts/${id}/likePost`);

const signin = (inputText) => API.post("/user/signin", inputText);
const signup = (inputText) => API.post("/user/signup", inputText);

export {fetchPosts, createPost, updatePost, deletePost, likePost, signin, signup}; 