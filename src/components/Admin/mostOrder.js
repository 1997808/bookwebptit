import React from "react";
import BookSmall from "./template/bookSmall";

export default function MostOrder({ book }) {
  const number = Math.floor(Math.random() * 19);
  return (
    <div className="">
      <h3 className="text-2xl">Sách bán chạy</h3>
      {book &&
        book.slice(number, number + 5).map((items) => {
          return (
            <BookSmall key={items.id} photo={items.image} name={items.name} />
          );
        })}
    </div>
  );
}
