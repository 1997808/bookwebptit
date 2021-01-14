import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BookReceipt from "../components/BookReceipt"

export default function Receipt() {
  return (
    <div>
      <Header />
      <div className="bg-red-50">
        <div className="container mx-auto pb-8 flex flex-col items-center">
          <p className="text-2xl font-medium pt-16 pb-8">
            Đơn hàng của bạn
          </p>
          <div className="w-2/3">
            <BookReceipt />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}