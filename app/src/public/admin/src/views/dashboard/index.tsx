import * as React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

export const Dashboard = () => {
  return (
    <div className="content">
      <div className="login-head">
        <h2>Welcome Dashboard</h2>
      </div>
      <br />
      <br />
      <br />
      <div className="dashboard-modules">
        Modules: <NavLink to="/products">Products</NavLink>
      </div>
    </div>
  );
};
