import axios from "axios";

// local development: const url = "http://localhost:5000/posts";
const url = "https://social-media-app-12.herokuapp.com/posts";

const fetchPosts = () => axios.get(url);

const createPost = (newPost) => axios.post(url, newPost);

const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

const deletePost = (id) => axios.delete(`${url}/${id}`);

const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

export {fetchPosts, createPost, updatePost, deletePost, likePost};