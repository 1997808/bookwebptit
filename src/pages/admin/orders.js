import React, { useState, useEffect } from "react";
import OrderTable from "../../components/Admin/orderTable";
import SearchBar from "../../components/Admin/searchBar";
import { MyAxios } from "../../util/api";

export default function Orders() {
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    const getAllOrder = async () => {
      await MyAxios.get("/admin/order", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((response) => {
        if (response.data.err) {
          alert(response.data.err);
        } else {
          setOrderData(response.data.result);
        }
      });
    };
    getAllOrder();
  }, []);

  return (
    <>
      <h2 className="text-3xl font-medium pt-12">Đơn hàng</h2>
      <SearchBar />
      <OrderTable orderData={orderData} />
    </>
  );
}
