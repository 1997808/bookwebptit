import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { mycss } from "../../util/css";
import CategoryTable from "../../components/Admin/categoryTable";
import { MyAxios } from "../../util/api";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().trim().required(),
});

export default function CategoryAdd() {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const { INPUT_FIELD, BUTTON_BLACK } = mycss;

  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    const getAllCategory = async () => {
      await MyAxios.get("/admin/category", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((response) => {
        if (response.data.err) {
          alert(response.data.err);
        } else {
          setCategoryData(response.data.result);
        }
      });
    };
    getAllCategory();
  }, []);

  const onSubmit = async (data) => {
    const addCategory = await MyAxios.post(
      "/admin/category",
      {
        name: data.name,
      },
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }
    ).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      }
    });
    return addCategory;
  };

  return (
    <>
      <h3 className="text-3xl font-medium pt-12 pb-5">Thêm danh mục</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-6 gap-8 pb-8"
      >
        <input
          type="text"
          placeholder={"name"}
          {...register("name", { required: true })}
          className={`${INPUT_FIELD} col-span-3 mt-5`}
        />
        <button type="submit" className={`${BUTTON_BLACK} col-span-1 mt-5`}>
          <p className="text-white">Lưu</p>
        </button>
      </form>

      <CategoryTable categoryData={categoryData} />
    </>
  );
}
