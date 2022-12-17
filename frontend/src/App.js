import React, {useEffect, useState} from "react";
import {Container, AppBar, Typography, Grow, Grid} from "@mui/material";
import camera from "./images/camera.jpg";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import {useDispatch} from "react-redux";
import {getPosts} from "./actions/posts";

function App() {
   const [currentId, setCurrentId] = useState(null);
   const {classes} = useStyles();
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getPosts());
   }, [dispatch]);

   return (
      <Container maxWidth="lg">
         <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h3" align="center">Blockbuster</Typography>
            <img className={classes.image} src={camera} alt="memories" height="80" width="80"/>
         </AppBar>
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
      </Container>
   )
}

export default App;