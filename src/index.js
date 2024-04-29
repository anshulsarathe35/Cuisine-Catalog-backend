import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import {userRouter} from "./routes/users.js"
import { recipesRouter } from "./routes/recipes.js";

const app = express();
app.use(express.json());

dotenv.config();

app.use(cors()); // allow
app.use("/auth", userRouter)

app.use("/recipes", recipesRouter)

mongoose.connect(process.env.MONGODB_URI,
console.log("Connected to mongodb"),{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)

const port = process.env.PORT;
app.listen(port, ()=> console.log(`Server Started on ${port}....`))
