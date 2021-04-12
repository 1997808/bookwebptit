import React from "react"

export default function Product({ id, name, price, sale, stock }) {
  return (
    <tr key={id} className="border-b hover:bg-white">
      <td className="text-sm p-4 truncate">{id}</td>
      <td className="text-sm p-4 truncate">{name}</td>
      <td className="text-sm p-4 truncate">{price}</td>
      <td className="text-sm p-4 truncate">{sale}</td>
      <td className="text-sm p-4 truncate">{stock}</td>
    </tr>
  )
}