import React from "react"
import PaymentForm from "../components/PaymentForm"
import OrderTotal from "../components/PaymentForm/orderTotal"

export default function Payment() {
  return (
    <div className="bg-red-50">
      <div className="container mx-auto grid grid-cols-3 gap-8 pb-8">
        <p className="col-span-3 text-2xl font-medium text-center pt-16">
          Thanh toán
          </p>
        <div className="col-span-2">
          <PaymentForm />
        </div>
        <div className="col-span-1">
          <OrderTotal />
        </div>
      </div>
    </div>
  );
}