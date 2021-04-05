import { Request, Response, Router } from "express";
import Transaction, { ITx } from "../models/transaction";
const txRouter = Router();

// @route GET /utxos/:address
// @desc  Retreive all transactions for a given address
txRouter.get("/:address", async (req: Request, res: Response) => {
  try {
    // Get transactions for provided address
    const address: string = req.params.address;
    const utxos: ITx[] = await Transaction.find({ address: address });

    // Throw custom error if provided invalid wallet
    if (utxos.length < 1) throw ("no matching wallet");

    // Iterate over utxos and determine total balance
    let balance: number = 0;
    for (let i = 0; i < utxos.length; i++) {
      let current = utxos[i];
      if (!current.spent) {
        balance += current.amount;
      } else {
        balance -= current.amount;
      }
    }

    // Return success message and balance
    res.status(200).json({ balance: balance });
  } catch(error) {
    res.status(400).json({ msg: error });
  }
});

// @route GET /utxos/:address/:spent
// @desc  Retrive all spent or unspent transactions for a given address
txRouter.get("/:address/:spent", async (req: Request, res: Response) => {
  try {
    // Guard clause for invalid spent
    const spent: string = req.params.spent;
    const options: string[] = [ "true", "false" ];
    if (!options.includes(spent)) throw "Invalid spent value";

    // Get list of related transactions
    const isSpent: boolean = req.params.spent === "true";
    const address: string = req.params.address;
    const utxos: ITx[] = await Transaction.find({ address: address });

    // Throw custom error if address is invalid
    if (utxos.length < 1) throw "no matching wallet";

    // Iterate over transactions and sum balance or spent or unspent transactions
    let balance: number = 0;
    if (isSpent) {
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

    // Return success status and balance
    res.status(200).json({ balance: balance });
  } catch(error) {
    res.status(400).json({ msg: error });
  }
});

export default txRouter;