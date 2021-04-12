import web from '../../images/web.png';
import user from '../../images/user.png';
import receipt from '../../images/receipt.png';
import sales from '../../images/sales.png';
import DataOverview from "./template/dataOverview"

export default function Overview() {
  return (
    <>
      <div className="w-full z-10 bg-transparent md:flex-col md:flex-nowrap md:justify-start flex">
        <h2 className="text-3xl font-medium py-12">Good afternoon, Zaini</h2>
        <div className="grid grid-cols-4 gap-8">
          <DataOverview color="bg-purple-200" cat_icon={web} cat_name="Lượng người xem" />
          <DataOverview color="bg-yellow-200" cat_icon={user} cat_name="Người dùng mới" />
          <DataOverview color="bg-blue-200" cat_icon={receipt} cat_name="Đơn hàng" />
          <DataOverview color="bg-pink-200" cat_icon={sales} cat_name="Doanh thu" />
        </div>
      </div>
    </>
  )
}