import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: __dirname + "/../.env" });

interface IConnectFn {
  (): void
}

interface IParams {
  useCreateIndex: boolean,
  useNewUrlParser: boolean,
  useUnifiedTopology: boolean
}

const db: string = process.env.mongoURI || "";
const dbParams: IParams = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

export const dbConnect: IConnectFn = () => {
  mongoose.connect(db, dbParams)
    .then(() => console.log("Connected to database"))
    .catch(error => console.log(error));

  mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from database");
  });
}

export const dbClose: IConnectFn = () => {
  mongoose.disconnect();
}


