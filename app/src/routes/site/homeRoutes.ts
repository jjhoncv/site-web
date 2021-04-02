import { Router, Request, Response } from "express";

const route: Router = Router();

route.get("/", (req: Request, res: Response) => {
  res.render('home', { title: 'Express' });
});

export const homeRoutes = route;
