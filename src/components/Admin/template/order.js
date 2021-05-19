import React from "react";
import Td from "./Td";
import { vndFormatter } from "../../../util/cartSum";

export default function Order({ id, name, phone, total, date }) {
  return (
    <tr key={id} className="border-b hover:bg-white">
      <Td to={`/admin/orders/${id}`}>{id}</Td>
      <Td to={`/admin/orders/${id}`}>{name}</Td>
      <Td to={`/admin/orders/${id}`}>{phone}</Td>
      <Td to={`/admin/orders/${id}`}>{vndFormatter.format(total)}</Td>
      <Td to={`/admin/orders/${id}`}>{date.slice(0, 19).replace("T", " ")}</Td>
    </tr>
  );
}
