import React from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "./logo.svg";
import user from "../../images/image2.png";
import cart from "../../images/image3.png";
import search from "../../images/image4.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookList, resetBookList } from "../../actions";
import { useForm } from "react-hook-form";
import { mycss } from "../../util/css";
import { MyAxios } from "../../util/api";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  bookname: yup.string().trim(),
});

export default function Header() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const { INPUT_FIELD } = mycss;
  let history = useHistory();

  const isAuth = useSelector((state) => state.auth);
  var loginBtn = "/login";
  if (!isAuth.user && !isAuth.admin) {
    loginBtn = "/login";
  } else if (isAuth.user && !isAuth.admin) {
    loginBtn = "/user/" + isAuth.userID;
  } else if (!isAuth.user && isAuth.admin) {
    loginBtn = "/admin";
  }

  const onSubmit = async (data) => {
    if (data.bookname) {
      const searchBook = await MyAxios.get(`/searchbook/${data.bookname}`).then(
        (response) => {
          if (response.data.err) {
            alert(response.data.err);
          } else {
            if (response.data.message) {
              alert(response.data.message);
            } else {
              dispatch(fetchBookList(response.data.result));
              setTimeout(() => history.push("/book"), 1000);
            }
          }
        }
      );
      return searchBook;
    }
  };

  return (
    <div className="container mx-auto w-full py-6 flex justify-between">
      <div className="left-side flex items-center">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <Link to="/">
          <p className="pl-10">Trang chủ</p>
        </Link>
        <Link to="/book" onClick={() => dispatch(resetBookList())}>
          <p className="pl-10">Sản phẩm</p>
        </Link>
        <Link to="/contact">
          <p className="pl-10">Liên hệ</p>
        </Link>
      </div>
      <div className="right-side flex items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-64 grid grid-cols-5"
        >
          <input
            type="text"
            {...register("bookname", { required: true })}
            className={`${INPUT_FIELD} col-span-4`}
          />
          <button
            type="submit"
            className={`h-12 w-full flex justify-center items-center border border-black bg-white col-span-1`}
          >
            <img src={search} alt="logo" />
          </button>
        </form>
        <Link to={loginBtn} className="ml-10">
          <img src={user} alt="logo" className="h-5" />
        </Link>
        <Link to="/cart" className="ml-10">
          <img src={cart} alt="logo" className="h-6" />
        </Link>
      </div>
    </div>
  );
}
