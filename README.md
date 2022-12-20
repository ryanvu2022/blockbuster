# Blockbuster

## **Live Version**: http://blockbuster12.com/

This is a movies review app that allows user to post reviews about any movie.  
This app is built using React, Redux (Redux Toolkit), Axios, Material-UI, Node, Express, MongoDB, Mongoose.  
Sign in and sign up functionality was built using bcrypt, Google OAuth2 using the latest Google Identity Services SDK.  
Backend is hosted on Railway, Database is stored and managed by MongoDB Atlas, and Frontend is deployed with AWS S3.

### Key features:

- Sign Up and Sign In:
  - User can sign up by filling the form. Password will be hashed with bcryptjs and stored on the mongoDB database.
  - User can sign in with Google or with email and password (after they sign up).
- Create / Read / Update / Delete:
  - Users can see other people's reviews without signing in.
  - User must sign in to like other users' reviews or to create, update or delete their own reviews.

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can open 2 separate terminals to run the app in the development mode:

- Go to frontend, run: **_npm start_**
- Go to backend, run: **_nodemon index.js_**  
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
