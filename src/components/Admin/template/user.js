import React from "react";
import Td from "./Td";

export default function User({ id, username, password, name, phone, address }) {
  return (
    <tr key={id} className="border-b hover:bg-white">
      <Td>{id}</Td>
      <Td>{username}</Td>
      <Td>{password}</Td>
      <Td>{name}</Td>
      <Td>{phone}</Td>
      <Td>{address}</Td>
    </tr>
  );
}
