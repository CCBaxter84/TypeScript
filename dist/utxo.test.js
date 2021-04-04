"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const chai_1 = require("chai");
const supertest_1 = __importDefault(require("supertest"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./database");
dotenv_1.default.config({ path: __dirname + "./.env" });
describe("Test all requests to /utxos API", () => {
    /*
    // Set up and Tear down DB connection
    beforeEach(async () => {
      dbConnect();
    });
  
    afterEach(async () => {
      dbClose();
    });*/
    // Test DB Connection
    it("Should connect and disconnect to MongoDB", () => __awaiter(void 0, void 0, void 0, function* () {
        database_1.dbClose();
        mongoose_1.default.connection.on("disconnected", () => {
            chai_1.expect(mongoose_1.default.connection.readyState).to.equal(0);
        });
        mongoose_1.default.connection.on("connected", () => {
            chai_1.expect(mongoose_1.default.connection.readyState).to.equal(1);
        });
        mongoose_1.default.connection.on("error", () => {
            chai_1.expect(mongoose_1.default.connection.readyState).to.equal(99);
        });
        database_1.dbConnect();
    }));
    // Test getting all transactions for a given address
    describe("GET /:address", () => __awaiter(void 0, void 0, void 0, function* () {
        it("Should return list of utxos for a valid BTC address", () => __awaiter(void 0, void 0, void 0, function* () {
            const validAddress = "1CL5TbB2MaR4mrFjtYQ5GyA3cP2bSmPxAn";
            const response = yield supertest_1.default(app_1.default).get(`/utxos/${validAddress}`);
            chai_1.expect(response.status).to.equal(200);
            chai_1.expect(response.body.balance).to.equal(183722.2696013707);
        }));
        it("Should return HTTP 400 error for invalid BTC address", () => __awaiter(void 0, void 0, void 0, function* () {
            const invalidAddress = "InvalidBTCWallet";
            const response = yield supertest_1.default(app_1.default).get(`/utxos/${invalidAddress}`);
            console.log(response);
            chai_1.expect(response.status).to.equal(400);
        }));
        /*it("Should return Error message when provided no address", () => {
    
        });*/
    }));
    // Test getting all spent or unspent transactions for a given address
    /*describe("GET /:address/:spent", () => {
      it("Should return 'no matching wallet' for invalid BTC address", () => {
  
      });
  
      it("Should return Error message when provided no address", () => {
  
      });
  
      it("Should return list of utxos for a valid BTC address", () => {
  
      });
    });*/
});
