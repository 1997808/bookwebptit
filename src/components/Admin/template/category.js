import React from "react";
import Td from "./Td";

export default function Category({ id, name, count }) {
  return (
    <tr key={id} className="border-b hover:bg-white">
      <Td>{id}</Td>
      <Td>{name}</Td>
      <Td>{count}</Td>
    </tr>
  );
}
