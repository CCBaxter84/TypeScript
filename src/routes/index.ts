import { Request, Response, Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req: Request, res: Response) => {
  res.render("index");
});

export default indexRouter;