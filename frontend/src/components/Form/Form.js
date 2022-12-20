import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import useStyles from "./styles";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts"

function Form({ currentId, setCurrentId }) {   
   const { classes } = useStyles();
   const [postData, setPostData] = useState({ title: "", message: "", tags: "", selectedFile: "" })
   const post = useSelector(state => currentId ? state.posts.posts.find(p => p._id === currentId) : null);
   const dispatch = useDispatch();
   const user = JSON.parse(localStorage.getItem("profile"));

   useEffect(() => {
      if(post) setPostData(post);
   }, [post])

   const handleSubmit = (event) => {
      event.preventDefault();
      if(currentId) {
         dispatch(updatePost(currentId, { ...postData, name: user?.given_name }));
      } else {
         dispatch(createPost({ ...postData, name: user?.given_name }));
      }
      clear();
   }

   const handleChange = (event) => {
      const {name, value} = event.target;
      setPostData(prevData => {
         return {
            ...prevData,
            [name]: value
         };
      });
   }

   const clear = () => {
      setCurrentId(null);
      setPostData({ title: "", message: "", tags: "", selectedFile: "" })
   }

   if (!user?.given_name) {
      return (
         <Paper className={classes.paper}>
            <Typography variant="h6" align="center">
               Please Sign In to create your own reviews.
            </Typography>
         </Paper>
      )
   }

   return (
      <Paper className={classes.paper}>
         <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6" textAlign="center">{currentId ? "Editting" : "Creating"} a Review</Typography>
            <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={handleChange} />
            <TextField name="message" multiline variant="outlined" label="Message" fullWidth value={postData.message} onChange={handleChange} />
            <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} 
                       onChange={(e => setPostData({...postData, tags: e.target.value.split(',')}))} />
            <div className={classes.fileInput}>
               <FileBase 
                  type="file"
                  multiple={false}
                  onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
               />
            </div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="error" size="small" onClick={clear} fullWidth>Clear</Button>
         </form>
      </Paper>
   );
}

export default Form;