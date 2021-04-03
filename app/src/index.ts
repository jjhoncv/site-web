import express, { Application, Router } from "express";
import cors from "cors";
import { siteRoutes, apiRoutes, adminRoutes } from "./routes";
import "./utils/config";
import path from "path";
import { testConnection } from "./utils/connection";

const App = () => {
  const app: Application = express();

  const middlewares = () => {
    app.set("views", path.join(__dirname, "views"));
    app.set('view engine', 'pug')
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, "public/assets")));
  };

  const routes = () => {
    const router: Router = Router();
    router.use("/admin", adminRoutes);
    router.use("/api", apiRoutes);
    router.use("/", siteRoutes);
    app.use("/", router);
  };

  const init = () => {
    middlewares();
    routes();
    app.listen(process.env.SERVER_PORT);
    console.log(
      "server on " + process.env.SERVER_HOST + ":" + process.env.SERVER_PORT
    );
    testConnection()
  };

  return {
    init,
  };
};

async function main() {
  const app = App();
  app.init();
}

main();
