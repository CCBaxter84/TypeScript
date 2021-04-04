"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbClose = exports.dbConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: __dirname + "/../.env" });
const db = process.env.mongoURI || "";
const dbParams = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
};
const dbConnect = () => {
    mongoose_1.default.connect(db, dbParams)
        .then(() => console.log("Connected to database"))
        .catch(error => console.log(error));
    mongoose_1.default.connection.on("disconnected", () => {
        console.log("Disconnected from database");
    });
};
exports.dbConnect = dbConnect;
const dbClose = () => {
    mongoose_1.default.disconnect();
};
exports.dbClose = dbClose;
