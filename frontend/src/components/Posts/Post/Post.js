import React from "react";
import useStyles from "./styles";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

function Post({ post, setCurrentId }) { 
   const { classes } = useStyles();
   const dispatch = useDispatch();
   const user = JSON.parse(localStorage.getItem("profile"));

   const Likes = () => {
      if (post?.likes?.length > 0) {
        return post.likes.find(like => like === (user?.sub || user?._id))
          ? (
            <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}` }</>
          ) : (
            <><ThumbUpOffAltIcon fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}</>
          );
      }
  
      return <><ThumbUpOffAltIcon fontSize="small" />&nbsp;Like</>;
   };

   return (
      <Card className={classes.card} elevation={6} raised>
         <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
         <div className={classes.overlay}>
            <Typography variant="h6">{post.name}</Typography>
            <Typography variand="body2">{moment(post.createdAt).fromNow()}</Typography>
         </div>
         {(user?.sub === post?.creator || user?._id === post?.creator) && (
            <div className={classes.overlay2}>
               <Button 
                  style={{color: "white"}} 
                  size="small" 
                  onClick={()=> {setCurrentId(post._id)}}>
                  <MoreHorizIcon fontSize="large"/>
               </Button>
            </div>
         )}
         <div className={classes.details}>
            <Typography variant="body2" color="textSecondary">{post.tags.map(tag => `#${tag} `)}</Typography>
         </div>
         <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
         <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
         </CardContent>
         <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" disabled={!user} onClick={() => dispatch(likePost(post._id))}>
               <Likes />
            </Button>
            {(user?.sub === post?.creator || user?._id === post?.creator) && (
               <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                  <DeleteIcon fontSize="small" /> &nbsp; Delete
               </Button>
            )}
         </CardActions>
      </Card>
   );
}

export default Post;