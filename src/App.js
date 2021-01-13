import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
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
      <div>
        <ul>
          <li>
            <Link to="/">Index</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

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
          <Route path="/bookDetail">
            <BookDetail />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
