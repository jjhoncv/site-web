import * as React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({ component: Component, ...rest }) => {
  const isLogged = !!useSelector((state: any) => state.auth.token);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged === true ? (
          // <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
