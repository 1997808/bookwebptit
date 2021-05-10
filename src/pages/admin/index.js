import React from "react";
import { Switch } from "react-router-dom";
import Home from "./home";
import Books from "./books";
import Orders from "./orders";
import Users from "./users";
import Setting from "./setting";
import BookAdminDetail from "./bookAdminDetail";
import BookAdd from "./bookAdd";
import CategoryAdd from "./categoryAdd";

import AdminLayout from "../../pages/layout/admin";
import ProtectedRoute from "../../util/protectedRoute";
import { useSelector } from "react-redux";

export default function Admin() {
  const isAuth = useSelector((state) => state.auth);
  return (
    <>
      <Switch>
        <AdminLayout>
          <ProtectedRoute
            exact
            path="/admin"
            component={Home}
            isAuth={isAuth}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/listings"
            component={Books}
            isAuth={isAuth}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/admin/listings/:id"
            component={BookAdminDetail}
            isAuth={isAuth}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/addbook"
            component={BookAdd}
            isAuth={isAuth}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/category"
            component={CategoryAdd}
            isAuth={isAuth}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/admin/orders"
            component={Orders}
            isAuth={isAuth}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/admin/users"
            component={Users}
            isAuth={isAuth}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/admin/setting"
            component={Setting}
            isAuth={isAuth}
          ></ProtectedRoute>
        </AdminLayout>
      </Switch>
    </>
  );
}
