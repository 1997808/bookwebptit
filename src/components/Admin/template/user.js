import React from "react"

export default function User({ id, username, password, name, phone, address }) {
  return (
    <tr key={id} className="border-b hover:bg-white">
      <td className="text-sm p-4 truncate">{id}</td>
      <td className="text-sm p-4 truncate">{username}</td>
      <td className="text-sm p-4 truncate">{password}</td>
      <td className="text-sm p-4 truncate">{name}</td>
      <td className="text-sm p-4 truncate">{phone}</td>
      <td className="text-sm p-4 truncate">{address}</td>
    </tr>
  )
}