import React from "react";
import OrderTable from "../../components/Admin/orderTable";
import SearchBar from "../../components/Admin/searchBar";

export default function Orders() {
  return (
    <>
      <h2 className="text-3xl font-medium pt-12">Đơn hàng</h2>
      <SearchBar />
      <OrderTable />
    </>
  );
}
