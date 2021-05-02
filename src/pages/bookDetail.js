import React from "react";
import { useParams } from "react-router-dom";
import Recommend from "../components/Recommend";
import ProductDetail from "../components/ProductDetail";
import ProductDescription from "../components/ProductDetail/productDescription";
import { bookData } from "../assets/book";

export default function BookDetail() {
  let { id } = useParams();
  const data = bookData.filter((items) => items.id === id)[0];

  return (
    <div>
      <ProductDetail data={data} />
      <ProductDescription data={data} />
      <Recommend />
    </div>
  );
}
