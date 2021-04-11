import React from "react"

import BookList from "../components/BookList"
import CatFilter from "../components/CatFilter"

export default function Categories() {
  return (
    <div className="w-full">
      <div className="container mx-auto grid grid-cols-4 gap-8 pt-10 pb-8">
        <div className="col-span-1">
          <CatFilter />
        </div>
        <div className="col-span-3">
          <BookList />
        </div>
      </div>
    </div>
  )
}