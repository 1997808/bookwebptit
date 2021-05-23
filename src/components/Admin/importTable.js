import React from "react";
import Import from "./template/import";
import { useSelector, useDispatch } from "react-redux";
import { emptyImport } from "../../actions";
import { mycss } from "../../util/css";
import { MyAxios } from "../../util/api";

export default function ImportTable() {
  const { BUTTON_BLACK } = mycss;
  const dispatch = useDispatch();
  const importBook = useSelector((state) => state.stock.import);
  const onSubmit = () => {
    const importBookData = async () => {
      await MyAxios.post(
        "/admin/import",
        { data: importBook },
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      ).then((response) => {
        if (response.data.err) {
          alert(response.data.err);
        } else {
          console.log(response.data.result);
          dispatch(emptyImport());
        }
      });
    };
    if (importBook.length > 0) {
      importBookData();
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-5 gap-4 p-8 border-b border-solid border-gray-200">
        <div className="col-span-2">
          <p className="font-semibold">Tên sản phẩm</p>
        </div>
        <p className="col-span-1 font-semibold">Số lượng</p>
        <p className="col-span-1 font-semibold">Giá nhập</p>
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

      {importBook.length > 0 ? (
        <div className="grid grid-cols-5 gap-4 p-8 border-b border-solid border-gray-200">
          <button
            type="button"
            className={`${BUTTON_BLACK + "col-span-1 m-0"}`}
            onClick={() => onSubmit()}
          >
            <p className="text-white">Nhập hàng</p>
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
