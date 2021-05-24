import React, { useState, useEffect } from "react";
import web from "../../images/web.png";
import user from "../../images/user.png";
import receipt from "../../images/receipt.png";
import sales from "../../images/sales.png";
import DataOverview from "./template/dataOverview";
import { MyAxios } from "../../util/api";
import { vndFormatter } from "../..//util/cartSum";

export default function Overview() {
  const [userData, setUserData] = useState(0);
  const [orderData, setOrderData] = useState(0);
  const [bookSaleData, setBookSaleData] = useState(0);
  const [totalData, setTotalData] = useState(0);

  useEffect(() => {
    const getAllUser = async () => {
      await MyAxios.get("/admin/user", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((response) => {
        if (response.data.err) {
          alert(response.data.err);
        } else {
          setUserData(response.data.result.length);
        }
      });
    };

    const getAllOrder = async () => {
      await MyAxios.get("/admin/order", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((response) => {
        if (response.data.err) {
          alert(response.data.err);
        } else {
          var total = 0;
          for (let i = 0; i < response.data.result.length; i++) {
            total += response.data.result[i].total;
          }
          setTotalData(total);
          setOrderData(response.data.result.length);
        }
      });
    };

    const getAllOrderItem = async () => {
      await MyAxios.get("/admin/orderitem", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((response) => {
        if (response.data.err) {
          alert(response.data.err);
        } else {
          var total = 0;
          for (let i = 0; i < response.data.result.length; i++) {
            total += response.data.result[i].quantity;
          }
          setBookSaleData(total);
        }
      });
    };

    getAllUser();
    getAllOrder();
    getAllOrderItem();
  }, []);

  return (
    <>
      <div className="w-full z-10 bg-transparent md:flex-col md:flex-nowrap md:justify-start flex">
        <h2 className="text-3xl font-medium py-12">Good afternoon, Zaini</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          <DataOverview
            color="bg-yellow-200"
            cat_icon={user}
            cat_name="Lượng người dùng"
            number={userData}
          />
          <DataOverview
            color="bg-purple-200"
            cat_icon={web}
            cat_name="Lượng sách bán"
            number={bookSaleData}
          />
          <DataOverview
            color="bg-blue-200"
            cat_icon={receipt}
            cat_name="Đơn hàng"
            number={orderData}
          />
          <DataOverview
            color="bg-pink-200"
            cat_icon={sales}
            cat_name="Doanh thu"
            number={vndFormatter.format(totalData)}
          />
        </div>
      </div>
    </>
  );
}
