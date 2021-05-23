import React from "react";
import Stock from "./template/stock";

export default function StockTable({ bookStock }) {
  console.log(bookStock);
  return (
    <table className="table-fixed w-full">
      <thead>
        <tr className="text-left border-b">
          <th className="w-1/5 py-3 px-4">ID</th>
          <th className="w-2/5 py-3 px-4">Tên</th>
          <th className="w-1/5 py-3 px-4">Số lượng</th>
          <th className="w-1/5 py-3 px-4">Giá</th>
        </tr>
      </thead>
      <tbody>
        {bookStock &&
          bookStock.map((items) => (
            <Stock
              key={
                "" +
                items.bookID +
                items.quantity +
                items.price +
                items.stockType
              }
              id={items.bookID}
              name={items.name}
              quantity={items.quantity}
              price={items.price}
              stockType={items.stockType}
            />
          ))}
      </tbody>
    </table>
  );
}
