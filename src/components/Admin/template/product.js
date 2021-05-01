import React from "react";
import Td from "./Td";

export default function Product({ id, name, price, sale, stock }) {
  return (
    <tr key={id} className="border-b hover:bg-white">
      <Td to={`/admin/listings/${id}`}>{id}</Td>
      <Td to={`/admin/listings/${id}`}>{name}</Td>
      <Td to={`/admin/listings/${id}`}>{price}</Td>
      <Td to={`/admin/listings/${id}`}>{sale}</Td>
      <Td to={`/admin/listings/${id}`}>{stock}</Td>
    </tr>
  );
}
