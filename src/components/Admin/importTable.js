import React from "react";
import Import from "./template/import";

export default function ImportTable({ book }) {
  return (
    <table className="table-fixed w-full">
      <thead>
        <tr className="text-left border-b">
          <th className="w-1/6 py-3 px-4">ID</th>
          <th className="w-1/3 py-3 px-4">Tên</th>
          <th className="w-1/6 py-3 px-4">Số lượng</th>
          <th className="w-1/6 py-3 px-4">Tổng cộng</th>
        </tr>
      </thead>
      <tbody>
        {book &&
          book.map((items) => (
            <Import
              key={items.id}
              id={items.id}
              name={items.name}
              number={items.number}
              total={items.total}
            />
          ))}
      </tbody>
    </table>
  );
}
