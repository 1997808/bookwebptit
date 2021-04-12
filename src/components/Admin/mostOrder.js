import React from "react"
import { bookData } from "../../assets/book"
import BookSmall from "./template/bookSmall"

export default function MostOrder() {
  return (
    <div className="">
      <h3 className="text-2xl">Sách bán chạy</h3>
      {bookData && bookData.slice(0, 5).map((items) => {
        return (
          <BookSmall key={items.id} photo={items.image} name={items.name} />
        )
      })}
    </div>
  )
}