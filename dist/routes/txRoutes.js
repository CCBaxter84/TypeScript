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
const express_1 = require("express");
const transaction_1 = __importDefault(require("../models/transaction"));
const txRouter = express_1.Router();
// @route GET /utxos/:address
// @desc  Retreive all transactions for a given address
txRouter.get("/:address", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Get transactions for provided address
        const address = req.params.address;
        const utxos = yield transaction_1.default.find({ address: address });
        // Throw custom error if provided invalid wallet
        if (utxos.length < 1)
            throw ("no matching wallet");
        // Iterate over utxos and determine total balance
        let balance = 0;
        for (let i = 0; i < utxos.length; i++) {
            let current = utxos[i];
            if (!current.spent) {
                balance += current.amount;
            }
            else {
                balance -= current.amount;
            }
        }
        // Return success message and balance
        res.status(200).json({ balance: balance });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
}));
// @route GET /utxos/:address/:spent
// @desc  Retrive all spent or unspent transactions for a given address
txRouter.get("/:address/:spent", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Guard clause for invalid spent
        const { spent } = req.params;
        const options = ["true", "false"];
        if (!options.includes(spent))
            throw "Invalid spent value";
        // Get list of related transactions
        const isSpent = req.params.spent === "true";
        const address = req.params.address;
        const utxos = yield transaction_1.default.find({ address: address });
        // Throw custom error if address is invalid
        if (utxos.length < 1)
            throw "no matching wallet";
        // Iterate over transactions and sum balance or spent or unspent transactions
        let balance = 0;
        if (isSpent) {
            for (let i = 0; i < utxos.length; i++) {
                let current = utxos[i];
                if (current.spent) {
                    balance += current.amount;
                }
            }
        }
        else {
            for (let i = 0; i < utxos.length; i++) {
                let current = utxos[i];
                if (!current.spent) {
                    balance += current.amount;
                }
            }
        }
        // Return success status and balance
        res.status(200).json({ balance: balance });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
}));
exports.default = txRouter;
