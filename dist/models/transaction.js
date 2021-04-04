"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const txSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true
    },
    txid: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    spent: {
        type: Boolean,
        required: true
    }
});
const Transaction = mongoose_1.model("Transaction", txSchema);
exports.default = Transaction;
