import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import bodyParser from "body-parser"
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express();

app.use(bodyParser.urlencoded({extended: true, limit: "30mb"}));
app.use(bodyParser.json({extended: true, limit: "30mb"}));
app.use(cors());
 
app.use("/posts", postRoutes);
app.use("/user", userRoutes)

app.get('/', (req, res) => {
   res.send("<h1>Hello! Welcome to the Blockbuster REST API.</h1>");
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
   .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
   .catch((err) => console.log(err.message) );
