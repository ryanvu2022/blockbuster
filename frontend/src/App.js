import React from "react";
import { Container } from "@mui/material";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

function App() {
   return (
      <Container maxWidth="lg">
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path="/" element={<Navigate to="/posts" replace/>}/>
               <Route path="/posts" exact element={<Home />}/>
               <Route path="/auth" exact element={<Auth />}/>
            </Routes>
         </BrowserRouter>
      </Container>
   )
}

export default App;