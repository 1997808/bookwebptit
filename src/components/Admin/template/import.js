import React from "react";
import { vndFormatter } from "../../../util/cartSum";
import { removeItemStock } from "../../../actions";
import { useDispatch } from "react-redux";

export default function Import({ id, name, qty, importPrice, importID }) {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-5 gap-4 p-8 border-b border-solid border-gray-200">
      <div className="col-span-2 flex flex-col justify-center pr-4">
        <p className="text-base leading-6">{name}</p>
      </div>
      <div className="col-span-1 flex items-center">{qty}</div>
      <div className="col-span-1 flex items-center">
        {vndFormatter.format(importPrice)}
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <p
          className="w-1/2 text-center cursor-pointer"
          onClick={() => dispatch(removeItemStock(importID))}
        >
          Xóa
        </p>
      </div>
    </div>
  );
}
