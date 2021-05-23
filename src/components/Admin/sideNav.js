import DashBtn from "./template/dashBtn";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { MyAxios } from "../../util/api";
import { logout } from "../../actions";

export default function SideNav() {
  const dispatch = useDispatch();

  const usePathname = () => {
    let location = useLocation();
    return location.pathname;
  };

  const pathNow = usePathname();

  const logoutHandler = async () =>
    await MyAxios.get("/logout").then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      } else {
        dispatch(logout());
      }
    });

  return (
    <>
      <div className="fixed w-64 h-screen z-10 py-4 px-6">
        <h1 className="text-lg font-bold py-4">Dashboard</h1>
        <hr className="my-4 md:min-w-full"></hr>
        <DashBtn name="Tổng quan" link="admin" pathNow={pathNow} />
        <DashBtn name="Kho hàng" link="admin/listings" pathNow={pathNow} />
        <DashBtn name="Thay đổi" link="admin/stock" pathNow={pathNow} />
        <hr className="my-4 md:min-w-full"></hr>
        <DashBtn name="Thêm danh mục" link="admin/category" pathNow={pathNow} />
        <DashBtn name="Thêm sản phẩm" link="admin/addbook" pathNow={pathNow} />
        <DashBtn name="Nhập kho" link="admin/import" pathNow={pathNow} />
        <hr className="my-4 md:min-w-full"></hr>
        <DashBtn name="Đơn hàng" link="admin/orders" pathNow={pathNow} />
        <DashBtn name="Khách hàng" link="admin/users" pathNow={pathNow} />
        <DashBtn name="Cài đặt" link="admin/setting" pathNow={pathNow} />
        <div onClick={() => logoutHandler()}>
          <DashBtn name="Đăng xuất" link="login" pathNow={pathNow} />
        </div>
      </div>
    </>
  );
}
