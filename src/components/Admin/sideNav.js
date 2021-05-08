import DashBtn from "./template/dashBtn";
import { useDispatch } from "react-redux";
import { logout } from "../../actions";

export default function SideNav() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="fixed w-64 h-screen z-10 py-4 px-6">
        <h1 className="text-lg font-bold py-4">Dashboard</h1>
        <hr className="my-4 md:min-w-full"></hr>
        <DashBtn name="Tổng quan" link="admin" />
        <DashBtn name="Kho hàng" link="admin/listings" />
        <DashBtn name="Đơn hàng" link="admin/orders" />
        <DashBtn name="Khách hàng" link="admin/customers" />
        <hr className="my-4 md:min-w-full"></hr>
        <DashBtn name="CRUD" link="admin/crud" />
        <DashBtn name="Cài đặt" link="admin/setting" />
        <div onClick={() => dispatch(logout())}>
          <DashBtn name="Đăng xuất" link="" />
        </div>
      </div>
    </>
  );
}
