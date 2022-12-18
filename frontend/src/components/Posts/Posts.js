import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@mui/material";

const Posts = ({ setCurrentId }) => {    
   const { posts } = useSelector((store) => store.posts);

   return (
      !posts.length ? <CircularProgress size={60} /> : (
         <Grid container display="flex" justifyContent="space-between" alignItems="stretch" spacing={3}>
            {posts.map(post => (
               <Grid item key={post._id} xs={12} sm={6}>
                  <Post post={post} setCurrentId={setCurrentId}/>
               </Grid>
            ))}
         </Grid>
      )
   );
}

export default Posts;