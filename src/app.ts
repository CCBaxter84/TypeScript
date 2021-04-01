// Import libraries and dependencies
import express, { Application } from "express";
import expressLayouts from "express-ejs-layouts";
import mongoose from "mongoose";
import indexRouter from "./routes/index";
import txRouter from "./routes/txRoutes";
import dotenv from "dotenv";

// Initialize the server and environment variables
const app: Application = express();
dotenv.config({ path: __dirname + "/../.env" });
const PORT = process.env.PORT || 3000;
const db: string = process.env.mongoURI || "";

// Set the server's view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/../views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static('public'));

// Connect to the database
mongoose.connect(db, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connected to database"))
  .catch(error => console.log(error));

// Set the server's routes
app.use("/", indexRouter);
app.use("/utxos", txRouter);

// Set the server to listen
app.listen(PORT, () => console.log("Server is listening on port 5000"));