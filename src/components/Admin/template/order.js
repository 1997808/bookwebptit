import React from "react"

export default function Order({ id, name, phone, total, date }) {
  return (
    <tr key={id} className="border-b hover:bg-white">
      <td className="text-sm p-4 truncate">{id}</td>
      <td className="text-sm p-4 truncate">{name}</td>
      <td className="text-sm p-4 truncate">{phone}</td>
      <td className="text-sm p-4 truncate">{total}</td>
      <td className="text-sm p-4 truncate">{date}</td>
    </tr>
  )
}