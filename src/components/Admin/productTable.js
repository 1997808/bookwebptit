import React from "react";
import Product from "./template/product";

export default function ProductTable({ book }) {
  return (
    <table className="table-fixed w-full">
      <thead>
        <tr className="text-left border-b">
          <th className="w-1/6 py-3 px-4">ID</th>
          <th className="w-1/3 py-3 px-4">Tên</th>
          <th className="w-1/6 py-3 px-4">Giá</th>
          <th className="w-1/6 py-3 px-4">Giảm giá</th>
          <th className="w-1/6 py-3 px-4">Kho</th>
        </tr>
      </thead>
      <tbody>
        {book &&
          book.map((items) => (
            <Product
              key={items.id}
              id={items.id}
              name={items.name}
              price={items.price}
              discount={items.discount}
              stock={items.stock}
            />
          ))}
      </tbody>
    </table>
  );
}
