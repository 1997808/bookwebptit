import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import PaymentForm from "../components/PaymentForm"
import OrderTotal from "../components/PaymentForm/orderTotal"

export default function Payment() {
  return (
    <div>
      <Header />
      <div className="bg-red-50">
        <div className="container mx-auto grid grid-cols-4 gap-8 pb-8">
          <p className="col-span-4 text-2xl font-medium text-center pt-16">
            Giỏ hàng: 3 Sản phẩm
          </p>
          <div className="col-span-3">
            <PaymentForm />
          </div>
          <div className="col-span-1">
            <OrderTotal />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}