import { Request, Response, Router } from "express";

const txRouter = Router();

// @route
// @desc
txRouter.get('/', (req: Request, res: Response) => {
  res.send("Your mom");
});

export default txRouter;