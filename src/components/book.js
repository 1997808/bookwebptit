import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../actions/index";
import { vndFormatter } from "../util/cartSum";

export default function Book({ id, photo, name, author, price, discount }) {
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();

  return (
    <div
      className="p-8 border border-solid border-gray-200 relative"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <Link to={`/book/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}${photo}`}
          alt="icon"
          className="h-48 w-full object-scale-down"
        />
      </Link>
      <Link to={`/book/${id}`}>
        <div
          className={`relative z-10 transition bg-white duration-200 ease-in-out transform ${
            isShown ? "-translate-y-10" : ""
          }`}
        >
          {discount !== 0 ? (
            <p className="text-xs uppercase text-red-500 pt-2">Giảm giá</p>
          ) : (
            <div className="h-4 mt-2"></div>
          )}
          <p className="text-base truncate-2-lines h-14">{name}</p>
          <p className="text-xs text-gray-400 truncate-1-lines">{author}</p>
          <p className="text-lg font-medium">{vndFormatter.format(price)}</p>
        </div>
      </Link>

      <div className="absolute left-0 bottom-0 right-0 p-8">
        <p
          className={`transition duration-300 ease-in-out transform cursor-pointer ${
            isShown ? "opacity-100" : "opacity-20"
          }`}
          onClick={() => dispatch(addItem(id))}
        >
          Thêm vào giỏ
        </p>
      </div>
    </div>
  );
}
