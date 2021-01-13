import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
// import Categories from "../components/Categories"
import BookList from "../components/BookList"
import CatFilter from "../components/CatFilter"
// BookList CatFilter

export default function Categories() {
  return (
    <div className="w-full">
      <Header />
      <div className="container mx-auto grid grid-cols-4 gap-8 pt-10 pb-8">
        <div className="col-span-1">
          <CatFilter />
        </div>
        <div className="col-span-3">
          <BookList />
        </div>
      </div>
      <Footer />
    </div>
  )
}