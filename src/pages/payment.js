import React from "react";
// import AddressForm from "../components/PaymentForm/addressForm";
// import OrderTotal from "../components/PaymentForm/orderTotal";
import PaymentForm from "../components/PaymentForm";
import { useSelector } from "react-redux";

export default function Payment() {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div className="bg-red-50">
      <div className="container mx-auto grid grid-cols-2 xl:grid-cols-3 gap-8 pb-8">
        <p className="col-span-2 xl:col-span-3 text-2xl font-medium text-center pt-16">
          Thanh toán
        </p>
        {/* <div className="col-span-1 xl:col-span-2">
          <AddressForm />
        </div>
        <div className="col-span-1">
          <OrderTotal />
        </div> */}
        <PaymentForm data={cart} />
      </div>
    </div>
  );
}
