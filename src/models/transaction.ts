import { Model, model, Schema, Document } from "mongoose";

export interface ITx extends Document {
  id: string,
  txid: string,
  address: string,
  amount: number,
  spent: boolean
}

const txSchema = new Schema({
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

const Transaction: Model<ITx> = model("Transaction", txSchema);

export default Transaction;