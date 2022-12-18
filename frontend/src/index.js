import React from "react";
import {createRoot} from "react-dom/client";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import App from "./App";
import reducers from "./reducers";
import "./index.css";
import { GoogleOAuthProvider } from '@react-oauth/google';

// Configure Store
const store = configureStore({
   reducer: {
      posts: reducers
   }
})

createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <GoogleOAuthProvider clientId="421308644799-q2puf5g54up7j8jba217aihrrug600tc.apps.googleusercontent.com">
         <Provider store={store}>            
            <App />
         </Provider>
      </GoogleOAuthProvider>
   </React.StrictMode>
);