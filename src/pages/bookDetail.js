import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Recommend from "../components/Recommend"
import ProductDetail from "../components/ProductDetail"
import ProductDescription from "../components/ProductDetail/productDescription"

export default function BookDetail() {
  return (
    <div>
      <Header />
      <ProductDetail />
      <ProductDescription />
      <Recommend />
      <Footer />
    </div>
  );
}