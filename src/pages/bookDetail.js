import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Recommend from "../components/Recommend";
import ProductDetail from "../components/ProductDetail";
import ProductDescription from "../components/ProductDetail/productDescription";
import { MyAxios } from "../util/api";

export default function BookDetail() {
  let { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const getOneBook = async () => {
      await MyAxios.get(`/book/${id}`, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((response) => {
        if (response.data.err) {
          alert(response.data.err);
        } else {
          setData(response.data.result[0]);
        }
      });
    };
    getOneBook();
  }, [id]);

  return (
    <div>
      <ProductDetail data={data} />
      <ProductDescription data={data} />
      <Recommend />
    </div>
  );
}
