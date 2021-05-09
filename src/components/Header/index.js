import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.svg";
import user from "../../images/image2.png";
import cart from "../../images/image3.png";
import search from "../../images/image4.png";
import { useSelector } from "react-redux";

export default function Header() {
  const isAuth = useSelector((state) => state.auth);
  var loginBtn = "/login";
  if (!isAuth.user && !isAuth.admin) {
    loginBtn = "/login";
  } else if (isAuth.user && !isAuth.admin) {
    loginBtn = "/user/" + isAuth.userID;
  } else if (!isAuth.user && isAuth.admin) {
    loginBtn = "/admin";
  }

  return (
    <div className="container mx-auto w-full py-6 flex justify-between">
      <div className="left-side flex items-center">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <Link to="/">
          <p className="pl-10">Trang chủ</p>
        </Link>
        <Link to="/categories">
          <p className="pl-10">Danh mục</p>
        </Link>
        <Link to="/contact">
          <p className="pl-10">Liên hệ</p>
        </Link>
        {/* <Link to="/help">
          <p className="pl-10">Hỗ trợ</p>
        </Link> */}
      </div>
      <div className="right-side flex items-center">
        {/* <div className="w-64 bg-gray-200 p-2 flex items-center">
          <img src={search} alt="logo" />
        </div> */}
        {/* input here not div */}
        <Link to={loginBtn}>
          <img src={user} alt="logo" className="h-5 pl-10" />
        </Link>
        <Link to="/cart">
          <img src={cart} alt="logo" className="h-6 pl-10" />
        </Link>
      </div>
    </div>
  );
}
