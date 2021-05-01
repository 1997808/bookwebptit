import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Listings from "./listings";
import CRUD from "./crud";
import Orders from "./orders";
import Customers from "./customers";
import Setting from "./setting";
import BookAdminDetail from "./bookAdminDetail";

import AdminLayout from "../../pages/layout/admin";

export default function Admin() {
  return (
    <>
      <Switch>
        <AdminLayout>
          <Route exact path="/admin">
            <Home />
          </Route>
          <Route exact path="/admin/listings">
            <Listings />
          </Route>
          <Route path="/admin/listings/:id">
            <BookAdminDetail />
          </Route>
          <Route path="/admin/crud">
            <CRUD />
          </Route>
          <Route path="/admin/orders">
            <Orders />
          </Route>
          <Route path="/admin/customers">
            <Customers />
          </Route>
          <Route path="/admin/setting">
            <Setting />
          </Route>
        </AdminLayout>
      </Switch>
    </>
  );
}
