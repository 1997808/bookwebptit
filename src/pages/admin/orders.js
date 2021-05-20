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

  const onSubmit = async (data) => {
    if (data.searchData) {
      const searchOrder = await MyAxios.get(
        `admin/searchorder/${data.searchData}`,
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      ).then((response) => {
        console.log(response);
        if (response.data.err) {
          alert(response.data.err);
        } else {
          if (response.data.message) {
            alert(response.data.message);
          } else setOrderData(response.data.result);
        }
      });
      return searchOrder;
    } else {
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
    }
  };

  return (
    <>
      <h2 className="text-3xl font-medium pt-12">Đơn hàng</h2>
      <SearchBar onSubmit={onSubmit} />
      <OrderTable orderData={orderData} />
    </>
  );
}
