import React from "react";
import Td from "./Td";

export default function User({ id, username, name, phone, city }) {
  return (
    <tr key={id} className="border-b hover:bg-white">
      <Td>{id}</Td>
      <Td>{username}</Td>
      <Td>{name}</Td>
      <Td>{phone}</Td>
      <Td>{city}</Td>
    </tr>
  );
}
