import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Grow, Grid } from "@mui/material";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { getPosts } from "../../actions/posts";
import useStyles from "./styles";

const Home = () => {
   const [currentId, setCurrentId] = useState(null);
   const {classes} = useStyles();
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getPosts());
   }, [dispatch]);

   return (
      <Grow in>
         <Container>
            <Grid className={classes.root} container justifyContent="space-between" alignItems="stretch" spacing={4}>
               <Grid item xs={12} md={8}>
                  <Posts setCurrentId={setCurrentId} />
               </Grid> 
               <Grid item xs={12} md={4}>
                  <Form currentId={currentId} setCurrentId={setCurrentId}/>
               </Grid> 
            </Grid>
         </Container>
      </Grow>
   )
}

export default Home;