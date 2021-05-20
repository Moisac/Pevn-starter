import * as dotenv from "dotenv";
import express from "express";
import cors from 'cors';

import { PORT } from "./config/app";

import UsersRoutes from './routes/usersRoutes' 
import PostsRouters from './routes/postsRoutes'

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello!");
});

app.use("/api/users", UsersRoutes);
app.use("/api/posts", PostsRouters);

app.listen(PORT, () => console.log(`REST API server ready at: http://localhost:${PORT}`));
