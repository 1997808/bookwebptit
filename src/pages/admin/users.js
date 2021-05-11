import React, { useState, useEffect } from "react";
import UserTable from "../../components/Admin/userTable";
import SearchBar from "../../components/Admin/searchBar";
import { MyAxios } from "../../util/api";

export default function Users() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const getAllUser = async () => {
      await MyAxios.get("/admin/user", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((response) => {
        console.log(response.data);
        if (response.data.err) {
          alert(response.data.err);
        } else {
          setUserData(response.data.result);
        }
      });
    };
    getAllUser();
  }, []);
  return (
    <>
      <h2 className="text-3xl font-medium pt-12">Khách hàng</h2>
      <SearchBar />
      <UserTable userData={userData} />
    </>
  );
}
