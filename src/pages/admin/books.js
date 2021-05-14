import React, { useState, useEffect } from "react";
import ProductTable from "../../components/Admin/productTable";
import SearchBarBook from "../../components/Admin/searchBarBook";
import { MyAxios } from "../../util/api";

export default function Books() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getAllBook = async () => {
      await MyAxios.get("/admin/book", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((response) => {
        if (response.data.err) {
          alert(response.data.err);
        } else {
          setBook(response.data.result);
        }
      });
    };
    getAllBook();
  }, []);

  const onSubmit = async (data) => {
    if (data.itemID) {
      const searchBook = await MyAxios.get(
        `admin/searchbook/${data.itemID}`
      ).then((response) => {
        if (response.data.err) {
          alert(response.data.err);
        } else {
          setBook(response.data.result);
        }
      });
      return searchBook;
    }
  };

  return (
    <>
      <h2 className="text-3xl font-medium pt-12">Kho hàng</h2>
      <SearchBarBook onSubmit={onSubmit} />
      <ProductTable book={book} />
    </>
  );
}
