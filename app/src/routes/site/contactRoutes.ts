import { Router, Request, Response } from "express";

const route: Router = Router();

route.get("/", (req: Request, res: Response) => {
  res.render('contact', { title: 'Express' });

  // try {
  //   await pool.query("SHOW tables");
  //   res.send(`<h1>Site web</h1><h3>¡Connection MySQL successful!<h3>`);
  // } catch (e) {
  //   res.send(`<h1>Site web</h1><h3>Fail connection: ${e.message}<h3>`);
  // }
});

export const contactRoutes = route;
