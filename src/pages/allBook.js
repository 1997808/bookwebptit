import React from "react";
import BookList from "../components/BookList";
import CatFilter from "../components/CatFilter";
import { useSelector } from "react-redux";

export default function AllBook() {
  const allBookData = useSelector((state) => state.book.book);

  return (
    <div className="w-full">
      <div className="container mx-auto grid grid-cols-4 gap-8 pt-10 pb-8">
        <div className="col-span-1">
          <CatFilter />
        </div>
        <div className="col-span-3">
          <BookList bookData={allBookData} />
        </div>
      </div>
    </div>
  );
}
