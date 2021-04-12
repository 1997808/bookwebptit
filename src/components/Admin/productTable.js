import React from "react"
import Product from "./template/product"
import { bookData } from "../../assets/book"

export default function ProductTable() {
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
        {bookData && bookData.map(items =>
          <Product id={items.id} name={items.name} price={items.price} sale={items.sale} stock={200} />
        )}
      </tbody>
    </table>
  )
}