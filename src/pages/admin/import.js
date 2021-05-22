import React from "react";
import { useForm } from "react-hook-form";
import { mycss } from "../../util/css";
import { useSelector, useDispatch } from "react-redux";
import { addItemStock } from "../../actions";
import ImportTable from "../../components/Admin/importTable";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  itemID: yup.number().required(),
  qty: yup.number().integer().positive().required(),
  importPrice: yup.number().integer().positive().required(),
});
export default function Import() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const { INPUT_FIELD, BUTTON_BLACK } = mycss;
  const dispatch = useDispatch();
  const allBookData = useSelector((state) => state.book.book);

  const onSubmit = (data) => {
    const { itemID, qty, importPrice } = data;
    reset({
      itemID: "",
      qty: null,
      importPrice: null,
    });
    dispatch(addItemStock(itemID, qty, importPrice));
  };

  return (
    <>
      <div className="grid grid-cols-2">
        <h3 className="text-3xl font-medium pt-12 pb-5 col-span-2">Nhập kho</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="col-span-1">
          <select
            {...register("itemID", { required: true })}
            className={`${INPUT_FIELD} mt-5`}
            defaultValue=""
          >
            <option value="" disabled hidden>
              {"name"}
            </option>

            {allBookData.map((items) => (
              <option key={items.id} value={items.id}>
                {items.name}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder={"qty"}
            {...register("qty")}
            className={`${INPUT_FIELD} mt-5 ${
              errors.qty ? "border-red-300" : ""
            }`}
          />
          <input
            type="number"
            placeholder={"importPrice"}
            {...register("importPrice")}
            className={`${INPUT_FIELD} mt-5 ${
              errors.importPrice ? "border-red-300" : ""
            }`}
          />

          <button type="submit" className={`${BUTTON_BLACK} mt-5 mb-16`}>
            <p className="text-white">Thêm</p>
          </button>
        </form>
      </div>

      <ImportTable />
    </>
  );
}
