import React from "react"
import {
  Switch,
  Route,
} from "react-router-dom";
import Listings from "./listings"
import Messages from "./messages"
import Orders from "./orders"
import Customers from "./customers"
import Setting from "./setting"

import SideNav from "../../components/Admin/sideNav"

export default function Admin() {
  return (
    <>
      <SideNav />
      <Switch>
        <Route path="/admin/listings">
          <Listings />
        </Route>
        <Route path="/admin/messages">
          <Messages />
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
      </Switch>
    </>
  )
}