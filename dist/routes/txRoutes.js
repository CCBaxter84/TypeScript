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
        const address = req.params.address;
        const utxos = yield transaction_1.default.find({ address: address });
        if (utxos.length < 1)
            throw ("no matching wallet");
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
        res.status(200).json({ balance: balance });
    }
    catch (error) {
        res.status(400).send({ msg: error });
    }
}));
// @route GET /utxos/:address/:spent
// @desc  Retrive all spent or unspent transactions for a given address
txRouter.get("/:address/:spent", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const spent = req.params.spent === "true";
        const address = req.params.address;
        const utxos = yield transaction_1.default.find({ address: address });
        if (utxos.length < 1)
            throw "no matching wallet";
        let balance = 0;
        if (spent) {
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
        res.status(200).json({ balance: balance });
    }
    catch (error) {
        res.status(400).send(error);
    }
}));
exports.default = txRouter;
