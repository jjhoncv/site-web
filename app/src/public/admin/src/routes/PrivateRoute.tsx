import * as React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogged = !!useSelector((state: any) => state.auth.token);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
          // <Redirect
          //   to={{ pathname: `/login`, state: { from: props.location } }}
          // />
        )
      }
    />
  );
};
