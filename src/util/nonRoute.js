import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function NonRoute({
  isAuth,
  component: Component,
  reComponent: ReComponent,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuth.user && !isAuth.admin) {
          return <Component />;
        } else if (isAuth.user) {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        } else if (isAuth.admin) {
          return (
            <Redirect
              to={{ pathname: "/admin", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
}
