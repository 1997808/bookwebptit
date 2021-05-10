import React, { useState, useEffect } from "react";
import User from "./template/user";
import { MyAxios } from "../../util/api";

export default function UserTable() {
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
    <table className="table-fixed w-full">
      <thead>
        <tr className="text-left border-b">
          <th className="w-1/5 py-3 px-4">ID</th>
          <th className="w-1/5 py-3 px-4">Username</th>
          <th className="w-1/5 py-3 px-4">Tên</th>
          <th className="w-1/5 py-3 px-4">Điện thoại</th>
          <th className="w-1/5 py-3 px-4">Thành phố</th>
        </tr>
      </thead>
      <tbody>
        {userData &&
          userData.map((items) => (
            <User
              key={items.accountID}
              id={items.accountID}
              username={items.username}
              name={items.name}
              phone={items.phone}
              city={items.city}
            />
          ))}
      </tbody>
    </table>
  );
}
