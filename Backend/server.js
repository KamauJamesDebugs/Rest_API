import express from 'express';
import dotenv from "dotenv"
import { connectDB } from './config/db.js';

import ProductRoutes from "./routes/products.routes.js"

dotenv.config();

const app= express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //allows to accpt json data in the body

app.use("/api/products", ProductRoutes)


app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});