import React, { useEffect } from "react";
import { MyAxios } from "./util/api";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page404 from "./pages/404";
import BookDetail from "./pages/bookDetail";
import Cart from "./pages/cart";
import Categories from "./pages/categories";
import Index from "./pages/index";
import UserData from "./pages/userData";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Payment from "./pages/payment";
import Receipt from "./pages/receipt";
import ScrollToTop from "./util/scrollTop";

import Admin from "./pages/admin";
import ClientLayout from "./pages/layout/client";
import UserRoute from "./util/userRoute";
// import NonRoute from "./util/nonRoute";

import { adminAuth, userAuth, logout, setUserID } from "./actions";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth);

  useEffect(() => {
    const checkLoggedIn = async () => {
      await MyAxios.get("login").then((response) => {
        console.log(response.data);
        if (response.data.loggedIn === true) {
          if (response.data.role === "admin") {
            dispatch(adminAuth());
          } else {
            dispatch(setUserID(response.data.accountID));
            dispatch(userAuth());
          }
        } else dispatch(logout());
      });
    };
    checkLoggedIn();
  }, [dispatch]);

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route>
          <ClientLayout>
            <Switch>
              {/* <NonRoute /> */}
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <UserRoute
                path="/user/:userID"
                isAuth={isAuth}
                component={UserData}
              />
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
          </ClientLayout>
        </Route>
      </Switch>
    </Router>
  );
}
