import React from "react";
import Td from "./Td";

export default function Order({ id, name, phone, total, date }) {
  return (
    <tr key={id} className="border-b hover:bg-white">
      <Td>{id}</Td>
      <Td>{name}</Td>
      <Td>{phone}</Td>
      <Td>{total}</Td>
      <Td>{date}</Td>
    </tr>
  );
}
