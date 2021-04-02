import { Router } from "express";
import { homeRoutes } from "./homeRoutes";
import { contactRoutes } from "./contactRoutes";

const route: Router = Router();

route.use("/contact", contactRoutes);
route.use("/", homeRoutes);

export const siteRoutes = route;
