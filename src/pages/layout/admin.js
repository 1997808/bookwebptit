import React from 'react';
import SideNav from "../../components/Admin/sideNav"

const AdminLayout = ({ children }) => {
  return (
    <>
      <SideNav />
      <div className="md:ml-64 bg-gray-50 min-h-screen px-8">
        {children}
      </div>
    </>
  )
}

export default AdminLayout;