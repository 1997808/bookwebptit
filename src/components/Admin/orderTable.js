import React from "react";
import Order from "./template/order";

export default function OrderTable({ orderData }) {
  return (
    <table className="table-fixed w-full">
      <thead>
        <tr className="text-left border-b">
          <th className="w-1/5 py-3 px-4">ID</th>
          <th className="w-1/5 py-3 px-4">Tên</th>
          <th className="w-1/5 py-3 px-4">Điện thoại</th>
          <th className="w-1/5 py-3 px-4">Tổng cộng</th>
          <th className="w-1/5 py-3 px-4">Ngày đặt</th>
        </tr>
      </thead>
      <tbody>
        {orderData &&
          orderData.map((items) => (
            <Order
              key={items.orderID}
              id={items.orderID}
              name={items.name}
              phone={items.phone}
              total={items.total}
              date={items.date}
            />
          ))}
      </tbody>
    </table>
  );
}
