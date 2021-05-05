import React from "react";
import { Switch } from "react-router-dom";
import Home from "./home";
import Listings from "./listings";
import CRUD from "./crud";
import Orders from "./orders";
import Customers from "./customers";
import Setting from "./setting";
import BookAdminDetail from "./bookAdminDetail";

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
            component={Listings}
            isAuth={isAuth}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/admin/listings/:id"
            component={BookAdminDetail}
            isAuth={isAuth}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/admin/crud"
            component={CRUD}
            isAuth={isAuth}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/admin/orders"
            component={Orders}
            isAuth={isAuth}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/admin/customers"
            component={Customers}
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
