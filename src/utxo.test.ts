import mongoose from "mongoose";
import app from "./app";
import { expect } from "chai";
import request from "supertest";

describe("Test all requests to /utxos API", () => {
  // Test DB Connection
  it("Should connect and disconnect to MongoDB", async () => {
    mongoose.connection.on("disconnected", () => {
      expect(mongoose.connection.readyState).to.equal(0);
    });
    mongoose.connection.on("connected", () => {
      expect(mongoose.connection.readyState).to.equal(1);
    });
    mongoose.connection.on("error", () => {
      expect(mongoose.connection.readyState).to.equal(99);
    });
  });

  // Test getting all transactions for a given address
  describe("GET /:address", async () => {
    it("Should return correct balance of utxos for a valid BTC address", async () => {
      const validAddress: string = "1CL5TbB2MaR4mrFjtYQ5GyA3cP2bSmPxAn";
      const response = await request(app).get(`/utxos/${validAddress}`);
      expect(response.status).to.equal(200);
      expect(response.body.balance).to.equal(183722.26960137064);
    });

    it("Should return HTTP 400 error for invalid BTC address", async () => {
      const invalidAddress: string = "InvalidBTCWallet";
      const response = await request(app).get(`/utxos/${invalidAddress}`);
      expect(response.status).to.equal(400);
      expect(response.body.msg).to.equal("no matching wallet");
    });
  });

  // Test getting all spent or unspent transactions for a given address
  describe("GET /:address/:spent", () => {
    it("Should return 'no matching wallet' for invalid BTC address", async () => {
      const invalidAddress: string = "InvalidBTCWallet";
      const response = await request(app).get(`/utxos/${invalidAddress}/true`);
      expect(response.status).to.equal(400);
      expect(response.body.msg).to.equal("no matching wallet");
    });

    it("Should return Error message when provided non-boolean input for spent", async () => {
      const invalidAddress: string = "InvalidBTCWallet";
      const response = await request(app).get(`/utxos/${invalidAddress}/null`);
      expect(response.status).to.equal(400);
      expect(response.body.msg).to.equal("Invalid spent value");
    });

    it("Should return correct balance for a valid BTC address and when spent is true", async () => {
      const validAddress: string = "1CL5TbB2MaR4mrFjtYQ5GyA3cP2bSmPxAn";
      const response = await request(app).get(`/utxos/${validAddress}/true`);
      expect(response.status).to.equal(200);
      expect(response.body.balance).to.equal(129.31132750999998);
    });

    it("Should return correct balance for a valid BTC address and when spent is false", async () => {
      const validAddress: string = "1CL5TbB2MaR4mrFjtYQ5GyA3cP2bSmPxAn";
      const response = await request(app).get(`/utxos/${validAddress}/false`);
      expect(response.status).to.equal(200);
      expect(response.body.balance).to.equal(183851.58092888066);
    });
  });
});