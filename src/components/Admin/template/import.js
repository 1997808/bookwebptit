import React from "react";
import Td from "./Td";

export default function Import({ id, name, number, total }) {
  return (
    <tr key={id} className="border-b hover:bg-white">
      <Td>{id}</Td>
      <Td>{name}</Td>
      <Td>{number}</Td>
      <Td>{total}</Td>
    </tr>
  );
}
