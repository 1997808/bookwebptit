import React from "react";
import Import from "./template/import";
import { useSelector } from "react-redux";

export default function ImportTable() {
  const importBook = useSelector((state) => state.stock.import);

  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-5 gap-4 p-8 border-b border-solid border-gray-200">
        <div className="col-span-2">
          <p className="font-semibold">Tên sản phẩm</p>
        </div>
        <p className="col-span-1 font-semibold">Số lượng</p>
        <p className="col-span-1 font-semibold">Giá tiền</p>
        <p className="col-span-1 font-semibold"></p>
      </div>
      {importBook &&
        importBook.map((items) => {
          return (
            <Import
              key={"" + items.id + items.qty + items.importPrice}
              id={items.id}
              name={items.name}
              qty={items.qty}
              importPrice={items.importPrice}
              importID={"" + items.id + items.qty + items.importPrice}
            />
          );
        })}
    </div>
  );
}
