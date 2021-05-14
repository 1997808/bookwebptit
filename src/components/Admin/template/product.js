import React from "react";
import Td from "./Td";
import { vndFormatter } from "../../../util/cartSum";

export default function Product({ id, name, price, discount, stock }) {
  return (
    <tr key={id} className="border-b hover:bg-white">
      <Td to={`/admin/listings/${id}`}>{id}</Td>
      <Td to={`/admin/listings/${id}`}>{name}</Td>
      <Td to={`/admin/listings/${id}`}>{vndFormatter.format(price)}</Td>
      <Td to={`/admin/listings/${id}`}>{discount}</Td>
      <Td to={`/admin/listings/${id}`}>{stock}</Td>
    </tr>
  );
}
