import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import useStyles from "./styles";
import camera from "../../images/camera.jpg";
import { useDispatch } from "react-redux";

const Navbar = () => {
   const { classes } = useStyles();
   const dispatch = useDispatch();

   const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))

   const logout = () => {
      dispatch({ type: "LOGOUT" })
      setUser(null);
      window.location.replace("/");
   }

   return (
      <AppBar className={classes.appBar} position="static" color="inherit">
         <div className={classes.brandContainer}>
            <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Blockbuster</Typography>
            <img className={classes.image} src={camera} alt="memories" height="80" width="80"/>
         </div>
         <Toolbar className={classes.toolbar}>
            {user ? (
               <div className={classes.profile}>
                  <Avatar className={classes.purple} alt={user.given_name} src={user.picture}>{user.given_name.charAt(0)}</Avatar>
                  <Typography className={classes.userName} variant="h6">{user.name}</Typography>
                  <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
               </div>
            ) : (
               <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )}
         </Toolbar>
      </AppBar>
   )
}

export default Navbar;