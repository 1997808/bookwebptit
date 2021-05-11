import React from "react";
import Category from "./template/category";

export default function CategoryTable({ categoryData }) {
  return (
    <table className="table-fixed w-full">
      <thead>
        <tr className="text-left border-b">
          <th className="w-1/6 py-3 px-4">ID</th>
          <th className="w-1/3 py-3 px-4">Tên</th>
          <th className="w-1/6 py-3 px-4">Số lượng</th>
        </tr>
      </thead>
      <tbody>
        {categoryData &&
          categoryData.map((items) => (
            <Category
              key={items.categoryID}
              id={items.categoryID}
              name={items.name}
              count={items.count}
            />
          ))}
      </tbody>
    </table>
  );
}
