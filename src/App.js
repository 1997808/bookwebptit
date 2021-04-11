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
import Signup from "./pages/signup"
import Payment from "./pages/payment"
import Receipt from "./pages/receipt"
import ScrollToTop from "./util/scrollTop"

import Admin from "./pages/admin"

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
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
        <Route path="/book-detail/:id">
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
