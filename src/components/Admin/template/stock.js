import React from "react";
import Td from "./Td";
import { vndFormatter } from "../../../util/cartSum";

export default function Stock({ id, name, price, quantity, stockType, date }) {
  return (
    <tr
      key={id}
      className={`border-b hover:bg-white ${
        stockType === "add" ? "bg-green-100" : ""
      }`}
    >
      <Td>{id}</Td>
      <Td>{name}</Td>
      <Td>
        {stockType === "add" ? "+" : "-"}
        {quantity}
      </Td>
      <Td>{vndFormatter.format(price)}</Td>
      <Td>{date}</Td>
    </tr>
  );
}
