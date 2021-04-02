import express, { Router } from "express";
import path from "path";
import "./../../utils/config";

const route: Router = Router();

let dirFileIndex = "/local";

if (process.env.NODE_ENV) {
  dirFileIndex = "/dist";
}

route.use(
  "/*",
  express.static(path.join(__dirname, "./../../public/admin" + dirFileIndex))
);

export const adminRoutes = route;
