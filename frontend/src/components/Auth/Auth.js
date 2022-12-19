import React, { useState } from "react";
import { Avatar, Button, Paper, Grid, Typography, Container } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import Input from "./Input";
import useStyles from "./styles";
import { useGoogleLogin } from "@react-oauth/google";
// import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import axios from "axios";

const Auth = () => {
   const { classes } = useStyles();
   const dispatch = useDispatch();
   const [showPassword, setShowPassword] = useState(false);

   const [isSignup, setIsSignup] = useState(false);

   const handleShowPassword = () => {
      setShowPassword((prev) => !prev )
   }

   const handleSubmit = () => {

   }

   const handleChange = () => {

   }
   
   const switchMode = () => {
      setIsSignup((prev) => !prev)
   }

   const login = useGoogleLogin({
      onSuccess: async tokenResponse => {
         try {
            const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
               headers: {
                  "Authorization": `Bearer ${tokenResponse.access_token}`
               }
            })
            dispatch({ type: "AUTH", payload: res.data})
            window.location.replace("/");            
         } catch (error) {
            console.log(error);
         }
      }
   });

   return (
      <Container component="main" maxWidth="xs">
         <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
               <LockOutlined />
            </Avatar>
            <Typography variant='h5'>{isSignup? "Sign up" : "Sign in"}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
               <Grid container spacing={2}>
                  {
                  isSignup && (
                     <>
                        <Input name="firstname" label="First Name" handleChange={handleChange} autoFocus half />
                        <Input name="lastname" label="Last Name" handleChange={handleChange} half />                     
                     </>
                  )
                  }
                  <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                  <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                  {isSignup && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password"/>}
               </Grid>
               
               <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                  {isSignup? "Sign Up" : "Sign In"}
               </Button>
               <Button id="google" className={classes.googleButton} color="primary" fullWidth variant="contained" onClick={() => login()}>Sign in with Google</Button>  
                           
               <Grid container justifyContent="flex-end">
                  <Grid item>
                     <Button onClick={switchMode}>
                        {isSignup ? "Already have Account? Sign In!" : "Don't have account? Sign Up!"}
                     </Button>                  
                  </Grid>
               </Grid>
            </form>
         </Paper>
      </Container>
   )
}

export default Auth;