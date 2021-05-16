import React from "react";
import BookList from "../components/BookList";
import CatFilter from "../components/CatFilter";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookList, resetBookList } from "../actions";
import { MyAxios } from "../util/api";

export default function AllBook() {
  const dispatch = useDispatch();
  const allBookList = useSelector((state) => state.book.bookList);
  const allCategory = useSelector((state) => state.book.category);

  const updateBookList = async (categoryID) => {
    await MyAxios.get(`/category/${categoryID}`).then((response) => {
      if (response.data.err) {
        alert(response.data.err);
      } else {
        dispatch(fetchBookList(response.data.result));
      }
    });
  };

  const reset = () => {
    dispatch(resetBookList());
  };

  return (
    <div className="w-full">
      <div className="container mx-auto grid grid-cols-4 gap-8 pt-10 pb-8">
        <div className="col-span-1">
          <CatFilter
            category={allCategory}
            updateBookList={updateBookList}
            resetBookList={reset}
          />
        </div>
        <div className="col-span-3">
          <BookList bookData={allBookList} />
        </div>
      </div>
    </div>
  );
}
