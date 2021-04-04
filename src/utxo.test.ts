import { Application } from "express";
import mongoose from "mongoose";
import app from "./app";
import { expect } from "chai";
import request from "supertest";
import dotenv from "dotenv";
import { dbConnect, dbClose } from "./database";
dotenv.config({ path: __dirname + "./.env" });

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
  it("Should connect and disconnect to MongoDB", async () => {
    dbClose();
    mongoose.connection.on("disconnected", () => {
      expect(mongoose.connection.readyState).to.equal(0);
    });
    mongoose.connection.on("connected", () => {
      expect(mongoose.connection.readyState).to.equal(1);
    });
    mongoose.connection.on("error", () => {
      expect(mongoose.connection.readyState).to.equal(99);
    });
    dbConnect();
  });

  // Test getting all transactions for a given address
  describe("GET /:address", async () => {
    it("Should return list of utxos for a valid BTC address", async () => {
      const validAddress: string = "1CL5TbB2MaR4mrFjtYQ5GyA3cP2bSmPxAn";
      const response = await request(app).get(`/utxos/${validAddress}`);
      expect(response.status).to.equal(200);
      expect(response.body.balance).to.equal(183722.2696013707);
    });

    it("Should return HTTP 400 error for invalid BTC address", async () => {
      const invalidAddress: string = "InvalidBTCWallet";
      const response = await request(app).get(`/utxos/${invalidAddress}`);
      console.log(response);
      expect(response.status).to.equal(400);
    });

    /*it("Should return Error message when provided no address", () => {

    });*/
  });

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