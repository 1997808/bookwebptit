import React from "react"
import UserTable from "../../components/Admin/userTable"
import SearchBar from "../../components/Admin/searchBar"


export default function Customer() {
  return (
    <>
      <h2 className="text-3xl font-medium pt-12">Khách hàng</h2>
      <SearchBar />
      <UserTable />
    </>
  )
}