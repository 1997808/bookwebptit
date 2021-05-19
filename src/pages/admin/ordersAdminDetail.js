import React, { useState, useEffect } from "react";
import OrdersDetail from "../../components/Admin/ordersDetail";
import { useParams } from "react-router-dom";
import { MyAxios } from "../../util/api";

export default function OrdersAdminDetail() {
  let { id } = useParams();
  const [orderData, setOrderData] = useState([]);
  const [orderitemData, setOrderitemData] = useState([]);

  useEffect(() => {
    const getOrder = async (id) => {
      await MyAxios.get(`/admin/order/${id}`, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((response) => {
        if (response.data.err) {
          alert(response.data.err);
        } else {
          setOrderData(response.data.result[0]);
        }
      });
    };

    const getOrderitem = async (id) => {
      await MyAxios.get(`/admin/orderitem/${id}`, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((response) => {
        if (response.data.err) {
          alert(response.data.err);
        } else {
          setOrderitemData(response.data.result);
        }
      });
    };
    getOrder(id);
    getOrderitem(id);
  }, [id]);

  return (
    <div className="bg-red-50">
      <div className="container mx-auto pb-8 flex flex-col items-center">
        <p className="text-2xl font-medium pt-16 pb-8">
          Thông tin đơn hàng #{id}
        </p>
        <div className="w-3/4">
          <OrdersDetail orderData={orderData} orderitemData={orderitemData} />
        </div>
      </div>
    </div>
  );
}
