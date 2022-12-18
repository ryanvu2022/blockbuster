import React, { useState } from "react";
import { Avatar, Button, Paper, Grid, Typography, Container } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import Input from "./Input";
import useStyles from "./styles";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";

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

   const googleSuccess = (credentialResponse) => {
      var decoded = jwt_decode(credentialResponse.credential)       
      try {
         dispatch({ type: "AUTH", payload: decoded})
      } catch (error) {
         console.log(error)
      }       
      window.location.replace("/");     
   }
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
               
               <GoogleLogin
                  text="Sign in with Google"
                  width="364"
                  theme="filled_blue"
                  size="large"
                  shape="rectangular"
                  onSuccess={googleSuccess}
                  onError={() => {
                     console.log("Login Failed");
                  }}
               />
                              
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