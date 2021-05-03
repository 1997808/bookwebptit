import React from "react";
import ProductTable from "../../components/Admin/productTable";
import SearchBar from "../../components/Admin/searchBar";

export default function Listings() {
  return (
    <>
      <h2 className="text-3xl font-medium pt-12">Kho hàng</h2>
      <SearchBar />
      <ProductTable />
    </>
  );
}
