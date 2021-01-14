import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Page404 from "./pages/404"
import BookDetail from "./pages/bookDetail"
import Cart from "./pages/cart"
import Categories from "./pages/categories"
import Index from "./pages/index"
import Login from "./pages/login"
import Logout from "./pages/logout"
import Payment from "./pages/payment"
import Receipt from "./pages/receipt"

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/receipt">
          <Receipt />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/book-detail">
          <BookDetail />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
}
