import React, { useEffect } from "react";
import { MyAxios } from "./util/api";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page404 from "./pages/404";
import BookDetail from "./pages/bookDetail";
import Cart from "./pages/cart";
import AllBook from "./pages/allBook";
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
import NonRoute from "./util/nonRoute";

import {
  adminAuth,
  userAuth,
  logout,
  setUserID,
  fetchBook,
  fetchBookList,
  fetchBookForCart,
  fetchNewBook,
  fetchCategory,
  fetchBookForImport,
} from "./actions";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth);

  useEffect(() => {
    const checkLoggedIn = async () => {
      await MyAxios.get("login").then((response) => {
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

  useEffect(() => {
    const allBookData = async () => {
      await MyAxios.get("/book").then((response) => {
        if (response.data.err) {
          alert(response.data.err);
        } else {
          dispatch(fetchBook(response.data.result));
          dispatch(fetchBookList(response.data.result));
          dispatch(fetchBookForCart(response.data.result));
          dispatch(fetchBookForImport(response.data.result));
        }
      });
    };
    allBookData();
  }, [dispatch]);

  useEffect(() => {
    const newBook = async () => {
      await MyAxios.get(`/newbook/${6}`).then((response) => {
        if (response.data.err) {
          alert(response.data.err);
        } else {
          dispatch(fetchNewBook(response.data.result));
        }
      });
    };
    newBook();
  }, [dispatch]);

  useEffect(() => {
    const allCategory = async () => {
      await MyAxios.get(`/category`).then((response) => {
        if (response.data.err) {
          alert(response.data.err);
        } else {
          dispatch(fetchCategory(response.data.result));
        }
      });
    };
    allCategory();
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
              <NonRoute path="/login" isAuth={isAuth} component={Login} />
              <NonRoute path="/signup" isAuth={isAuth} component={Signup} />
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
              <Route path="/book/:id">
                <BookDetail />
              </Route>
              {/* will be fixed */}
              <Route path="/book">
                <AllBook />
              </Route>
              {/* will be fixed */}
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
