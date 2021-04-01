// Import libraries and dependencies
import express, { Application } from "express";
import mongoose from "mongoose";
import txRouter from "./routes/txRoutes";
import dotenv from "dotenv";

// Initialize the server and environment variables
const app: Application = express();
app.use(express.json());
dotenv.config({ path: __dirname + "/../.env" });
const PORT = process.env.PORT || 3000;
const db: string = process.env.mongoURI || "";

// Connect to the database
mongoose.connect(db, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connected to database"))
  .catch(error => console.log(error));

// Set the server's routes
app.use("/utxos", txRouter);

// Set the server to listen
app.listen(PORT, () => console.log("Server is listening on port 5000"));