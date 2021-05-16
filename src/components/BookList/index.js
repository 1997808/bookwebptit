import React from "react";
import Book from "../book";

export default function BookList({ bookData }) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <p className="text-base">Hiển thị {bookData.length} kết quả</p>
        {/* <p>{category}</p> */}
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 pt-8">
        {bookData &&
          bookData.map((items) => {
            return (
              <Book
                key={items.id}
                id={items.id}
                photo={items.image}
                name={items.name}
                author={items.author}
                price={items.price}
                discount={items.discount}
              />
            );
          })}
      </div>
    </div>
  );
}
