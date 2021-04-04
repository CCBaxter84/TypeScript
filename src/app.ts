// Import libraries and dependencies
import express, { Application } from "express";
import { dbConnect } from "./database";
import txRouter from "./routes/txRoutes";
import dotenv from "dotenv";
import cors from "cors";

// Initialize the server and environment variables
const app: Application = express();
app.use(express.json());
app.use(cors());
dotenv.config({ path: __dirname + "/../.env" });
const PORT = process.env.PORT || 5000;

// Connect to the database
dbConnect();

// Set the server's routes
app.use("/utxos", txRouter);

// Set the server to listen
app.listen(PORT, () => console.log("Server is listening on port 5000"));

export default app;