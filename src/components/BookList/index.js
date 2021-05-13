import React from "react";
import Book from "../book";

export default function BookList({ bookData }) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <p className="text-base">Hiển thị 1-12 trong 126 kết quả</p>
        {/* <p>Kỹ năng sống</p> */}
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
