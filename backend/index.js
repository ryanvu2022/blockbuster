import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import bodyParser from "body-parser"
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/posts.js";

const app = express();

app.use(bodyParser.urlencoded({extended: true, limit: "30mb"}));
app.use(bodyParser.json({extended: true, limit: "30mb"}));
app.use(cors());

app.use('/posts', router);

app.get('/', (req, res) => {
   res.send("<h1>Hello! Welcome to the app.<br>Please add 'posts' to the URL to see the data in JSON format.<br>https://social-media-app-12.herokuapp.com/posts <br> Enjoy!</h1>");
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
   .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
   .catch((err) => console.log(err.message) );
