import * as api from "../api";
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionTypes";

const getPosts = () => async(dispatch) => {
   try {
      const { data } = await api.fetchPosts();
      dispatch({
         type: FETCH_ALL,
         payload: data
      });
   } catch (error) {
      console.log(error);
   } 
}

const createPost = (post) => async(dispatch) => {
   try {
      const { data } = await api.createPost(post);
      dispatch({
         type: CREATE, 
         payload: data
      });
   } catch (error) {
      console.log(error);
   }
}

const updatePost = (id, post) => async(dispatch) => {
   try {
      const { data } = await api.updatePost(id, post);
      dispatch({
         type: UPDATE,
         payload: data
      });
   } catch (error) {
      console.log(error);
   }
}

const deletePost = (id) => async(dispatch) => {
   try {
      await api.deletePost(id);
      dispatch({
         type: DELETE,
         payload: id
      });
   } catch (error) {
      console.log(error);
   }
}

const likePost = (id) => async(dispatch) => {
   try {
      const { data } = await api.likePost(id);
      dispatch({
         type: LIKE,
         payload: data
      });
   } catch (error) {
      console.log(error);
   }
}

export { getPosts, createPost, updatePost, deletePost, likePost };