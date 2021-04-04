"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import libraries and dependencies
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
const txRoutes_1 = __importDefault(require("./routes/txRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
// Initialize the server and environment variables
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
dotenv_1.default.config({ path: __dirname + "/../.env" });
const PORT = process.env.PORT || 5000;
// Connect to the database
database_1.dbConnect();
// Set the server's routes
app.use("/utxos", txRoutes_1.default);
// Set the server to listen
app.listen(PORT, () => console.log("Server is listening on port 5000"));
exports.default = app;
