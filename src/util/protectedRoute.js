import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({
  isAuth,
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth.admin) {
          console.log("is admin");
          return <Component />;
        } else {
          console.log("not admin");
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}
