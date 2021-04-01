import express, { Application, Request, Response } from "express";
import txRouter from "./routes/txRoutes";

const app: Application = express();
app.use("/utxos", txRouter);

app.listen(5000, () => console.log("Server is listening on port 5000"));