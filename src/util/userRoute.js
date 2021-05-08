import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function UserRoute({ isAuth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log("isAuth user " + isAuth.user);
        if (isAuth.user) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
}
