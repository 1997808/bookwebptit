import React from "react"
import {
  useParams
} from "react-router-dom";
import Recommend from "../components/Recommend"
import ProductDetail from "../components/ProductDetail"
import ProductDescription from "../components/ProductDetail/productDescription"

export default function BookDetail() {
  let { id } = useParams();

  return (
    <div>
      <ProductDetail id={id} />
      <ProductDescription id={id} />
      <Recommend />
    </div>
  );
}