import React from "react";
import {createRoot} from "react-dom/client";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import App from "./App";
import reducers from "./reducers";
import "./index.css";

// Configure Store
const store = configureStore({
   reducer: {
      posts: reducers
   }
})

createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Provider store={store}>            
         <App />
      </Provider>
   </React.StrictMode>
);