import React from "react";
import User from "./template/user";

export default function UserTable({ userData }) {
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
