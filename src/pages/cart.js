import React from "react";
import BookCart from "../components/BookCart";
import CartTotal from "../components/BookCart/cartTotal";
import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="bg-red-50">
      <div className="container mx-auto grid grid-cols-4 gap-8 pb-8">
        <p className="col-span-4 text-2xl font-medium text-center pt-16">
          Giỏ hàng: {cart.length} Sản phẩm
        </p>
        <div className="col-span-3">
          <BookCart data={cart} />
        </div>
        <div className="col-span-1">
          <CartTotal data={cart} />
        </div>
      </div>
    </div>
  );
}
