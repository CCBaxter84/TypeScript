import { Request, Response, Router } from "express";

const txRouter = Router();

// @route GET /utxos/:address
// @desc  Retreive all transactions for a given address
txRouter.get("/:address", (req: Request, res: Response) => {
  res.render("utxos/index");
});

// @route GET /utxos/:address/:spent
// @desc  Retrive all spent or unspent transactions for a given address
txRouter.get("/:address/:spent", (req: Request, res: Response) => {
  res.render("utxos/spent");
});

// @route POST /utxos
// @desc  Create a new transaction
txRouter.post("/", async (req: Request, res: Response) => {
  try {
    res.status(201).send("Create");
  } catch(error) {
    res.status(500).send(error);
  }
});

export default txRouter;