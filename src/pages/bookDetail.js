import React from "react"
import {
  BrowserRouter as Router,
  useParams
} from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer"
import Recommend from "../components/Recommend"
import ProductDetail from "../components/ProductDetail"
import ProductDescription from "../components/ProductDetail/productDescription"

export default function BookDetail() {
  let { id } = useParams();

  return (
    <div>
      <Header />
      <ProductDetail id={id} />
      <ProductDescription id={id} />
      <Recommend />
      <Footer />
    </div>
  );
}