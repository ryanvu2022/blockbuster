import React, { useState } from "react";
import { Avatar, Button, Paper, Grid, Typography, Container } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { signin, signup } from "../../actions/auth";
import Input from "./Input";
import useStyles from "./styles";
import axios from "axios";

const Auth = () => {
   const { classes } = useStyles();
   const dispatch = useDispatch();
   const [showPassword, setShowPassword] = useState(false);
   const [inputText, setInputText] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
   });

   const [isSignup, setIsSignup] = useState(false);

   const handleShowPassword = () => {
      setShowPassword((prev) => !prev )
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      if (isSignup) {
         dispatch(signup(inputText))
      } else {
         dispatch(signin(inputText))
      }
   }

   const handleChange = (event) => {
      const { name, value } = event.target;
      setInputText({ ...inputText, [name]: value });
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
                        <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half value={inputText.firstName}/>
                        <Input name="lastName" label="Last Name" handleChange={handleChange} half value={inputText.lastName}/>                     
                     </>
                  )
                  }
                  <Input name="email" label="Email Address" handleChange={handleChange} type="email" value={inputText.email} />
                  <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} value={inputText.password}/>
                  {isSignup && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" value={inputText.confirmPassword}/>}
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