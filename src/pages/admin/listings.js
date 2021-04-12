import React from "react"
import ProductTable from "../../components/Admin/productTable"

export default function Listings() {
  return (
    <>
      <div className="">
        <h2 className="text-3xl font-medium py-12">Kho hàng</h2>
        <ProductTable />
      </div>
    </>
  )
}