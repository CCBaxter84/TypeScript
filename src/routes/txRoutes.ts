import { Request, Response, Router } from "express";
import Transaction, { ITx } from "../models/transaction";
const txRouter = Router();

// @route GET /utxos/:address
// @desc  Retreive all transactions for a given address
txRouter.get("/:address", async (req: Request, res: Response) => {
  try {
    const address: string = req.params.address;
    const utxos: ITx[] = await Transaction.find({ address: address });
    let balance: number = 0;
    for (let i = 0; i < utxos.length; i++) {
      let current = utxos[i];
      if (!current.spent) {
        balance += current.amount;
      } else {
        balance -= current.amount;
      }
    }
    res.status(200).json({ balance: balance });
  } catch(error) {
    res.status(500).send(error);
  }
});

// @route GET /utxos/:address/:spent
// @desc  Retrive all spent or unspent transactions for a given address
txRouter.get("/:address/:spent", async (req: Request, res: Response) => {
  try {
    const spent: boolean = req.params.spent === "true";
    const address: string = req.params.address;
    const utxos: ITx[] = await Transaction.find({ address: address });
    let balance: number = 0;
    if (spent) {
      for (let i = 0; i < utxos.length; i++) {
        let current = utxos[i];
        if (current.spent) {
          balance += current.amount;
        }
      }
    } else {
      for (let i = 0; i < utxos.length; i++) {
        let current = utxos[i];
        if (!current.spent) {
          balance += current.amount;
        }
      }
    }
    res.status(200).json({ balance: balance });
  } catch(error) {
    res.status(500).send(error);
  }
});

export default txRouter;