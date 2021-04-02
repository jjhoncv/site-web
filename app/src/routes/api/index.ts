import { Router } from "express";
import { authRoutes } from "./authRoutes";
import { homeRoutes } from "./homeRoutes";
import { productsRoutes } from "./productsRoutes";

const route: Router = Router();

route.use("/auth", authRoutes);
route.use("/products", productsRoutes);
route.use("/", homeRoutes);

export const apiRoutes = route;
