import { pool } from "../utils/connection";

export const read = async (id = null) => {
  let sql = "SELECT * FROM products";
  if (id) {
    sql += ` WHERE id=?`;
    const data = await pool.query(sql, [id]);
    return data[0];
  } else {
    const data = await pool.query(sql);
    return data;
  }
};

export const create = async (product) => {
  const sqlInsert = `INSERT INTO products SET ?`;
  const record = await pool.query(sqlInsert, product);
  if (!!record) {
    return await read(record.insertId);
  } else {
    return false;
  }
};

export const update = async (product, id) => {
  const sqlUpdate = `UPDATE products SET ? WHERE id=? `;
  const record = await pool.query(sqlUpdate, [product, id]);
  if (!!record) {
    return await read(id);
  } else {
    return false;
  }
};

export const remove = async (id) => {
  const sql = `DELETE FROM products WHERE id=?`;
  const data = await pool.query(sql, [id]);
  return data;
};
