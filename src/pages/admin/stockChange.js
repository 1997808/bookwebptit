import React, { useState, useEffect } from "react";
import SearchBar from "../../components/Admin/searchBar";
import StockTable from "../../components/Admin/stockTable";
import { MyAxios } from "../../util/api";

export default function StockChange() {
  const [bookStock, setBookStock] = useState([]);
  useEffect(() => {
    const getBookStock = async () => {
      await MyAxios.get("/admin/stock", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((response) => {
        if (response.data.err) {
          alert(response.data.err);
        } else {
          setBookStock(response.data.result);
        }
      });
    };
    getBookStock();
  }, []);

  const onSubmit = async (data) => {
    if (data.searchData) {
      const searchBookStock = await MyAxios.get(
        `admin/stock/${data.searchData}`,
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      ).then((response) => {
        if (response.data.err) {
          alert(response.data.err);
        } else {
          if (response.data.message) {
            alert(response.data.message);
          } else setBookStock(response.data.result);
        }
      });
      return searchBookStock;
    } else {
      await MyAxios.get("/admin/stock", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((response) => {
        if (response.data.err) {
          alert(response.data.err);
        } else {
          setBookStock(response.data.result);
        }
      });
    }
  };

  return (
    <>
      <h2 className="text-3xl font-medium pt-12">Kho hàng</h2>
      <SearchBar onSubmit={onSubmit} />
      <StockTable bookStock={bookStock} />
    </>
  );
}
