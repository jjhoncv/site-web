import { createPool, Pool, QueryFunction } from "mysql";
import { promisify } from "util";
import "./config";

export interface PromisifiedPool extends Omit<Pool, "query"> {
  query: QueryFunction | Function;
}

const params = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

export const testConnection = async () => {
  try {
    await pool.query("SHOW tables");
    console.log("Connection MySQL successful");
  } catch (e) {
    console.log("Connection MySQL error", e.message);
  }
};

export const pool: PromisifiedPool = createPool(params);

pool.query = promisify(pool.query);
