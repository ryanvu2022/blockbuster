import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import CircularProgress from '@mui/joy/CircularProgress';
import { Grid } from "@mui/material";


const Posts = ({ setCurrentId }) => {     // Destructuring props: const { setCurrentId } = props
   const { posts } = useSelector((store) => store.posts);

   return (
      !posts.length ? <CircularProgress /> : (
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