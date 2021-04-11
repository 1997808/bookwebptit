import web from '../../images/web.png';
import user from '../../images/user.png';
import receipt from '../../images/receipt.png';
import sales from '../../images/sales.png';
import Overview from "./overview"
import DashBtn from "./dashBtn"

export default function SideNav() {
  return (
    <>
      <div className="fixed w-64 h-screen z-10 py-4 px-6">
        <h1 className="text-lg font-bold py-4">Dashboard</h1>
        <hr class="my-4 md:min-w-full"></hr>
        <DashBtn name="Tổng quan" link="admin" />
        <DashBtn name="Kho hàng" link="admin/listings" />
        <DashBtn name="Tin nhắn" link="admin/messages" />
        <DashBtn name="Đơn hàng" link="admin/orders" />
        <DashBtn name="Khách hàng" link="admin/customers" />
        <hr class="my-4 md:min-w-full"></hr>
        <DashBtn name="Cài đặt" link="admin/setting" />
        <DashBtn name="Đăng xuất" link="" />
      </div>
      <div className="md:ml-64 bg-gray-50 min-h-screen">
        <div className="w-full z-10 bg-transparent md:flex-col md:flex-nowrap md:justify-start flex px-8">
          <h2 className="text-3xl font-medium py-12">Good afternoon, Zaini</h2>
          <div className="grid grid-cols-4 gap-8">
            <Overview color="bg-purple-200" cat_icon={web} cat_name="Lượng người xem" />
            <Overview color="bg-yellow-200" cat_icon={user} cat_name="Người dùng mới" />
            <Overview color="bg-blue-200" cat_icon={receipt} cat_name="Đơn hàng" />
            <Overview color="bg-pink-200" cat_icon={sales} cat_name="Doanh thu" />
          </div>
        </div>
      </div>
    </>
  )
}