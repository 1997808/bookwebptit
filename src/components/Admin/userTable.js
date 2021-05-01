import React from "react";
import User from "./template/user";
import { userData } from "../../assets/user";

export default function UserTable() {
  return (
    <table className="table-fixed w-full">
      <thead>
        <tr className="text-left border-b">
          <th className="w-1/6 py-3 px-4">ID</th>
          <th className="w-1/6 py-3 px-4">Username</th>
          <th className="w-1/6 py-3 px-4">Password</th>
          <th className="w-1/6 py-3 px-4">Tên</th>
          <th className="w-1/6 py-3 px-4">Điện thoại</th>
          <th className="w-1/6 py-3 px-4">Địa chỉ</th>
        </tr>
      </thead>
      <tbody>
        {userData &&
          userData.map((items) => (
            <User
              key={items.id}
              id={items.id}
              username={items.username}
              password={items.password}
              name={items.name}
              phone={items.phone}
              address={items.address}
            />
          ))}
      </tbody>
    </table>
  );
}
