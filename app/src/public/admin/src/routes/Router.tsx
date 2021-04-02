import * as React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import { Register } from "../views/register";
import { Login } from "../views/login";
import { Dashboard } from "../views/dashboard";
import { ProductAdd, ProductEdit, ProductList } from "../views/products";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Routes: React.FC<any> = () => {
  return (
    <Router basename="admin">
      <Header />
      <Switch>       

        {/* public router */}
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/register" component={Register} />

        {/* dashboard router */}
        <PrivateRoute exact path="/" component={Dashboard} />

        {/* products router */}
        <PrivateRoute exact path="/products" component={ProductList} />
        <PrivateRoute exact path="/products/add" component={ProductAdd} />
        <PrivateRoute exact path="/products/edit/:id" component={ProductEdit} />

        <PublicRoute path="/" component={Login} />
      </Switch>
      <Footer />
    </Router>
  );
};
