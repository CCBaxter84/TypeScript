import { Request, Response, Router } from "express";

const txRouter = Router();

// @route GET /utxos/:address
// @desc  Retreive all transactions for a given address
txRouter.get("/:address", (req: Request, res: Response) => {
  res.send("Your mom");
});

// @route GET /utxos/:address/:spent
// @desc  Retrive all spent or unspent transactions for a given address
txRouter.get("/:address/:spent", (req: Request, res: Response) => {

});


// @route POST /utxos
// @desc  Add a new transaction
txRouter.post("/", (req: Request, res: Response) => {

});

export default txRouter;