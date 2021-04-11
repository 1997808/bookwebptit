import {
  Link,
} from "react-router-dom";

import vanhoc from '../../images/image7.png';
import kynang from '../../images/image8.png';
import khoahoc from '../../images/image10.png';

const Category = ({ color, cat_icon, cat_name }) => {
  return (
    <Link to="/categories">
      <div className={`${color} col-span-1 p-10`}>
        <img src={cat_icon} alt="icon" />
        <p className="text-lg pt-2 font-medium">{cat_name}</p>
        <p className="text-sm">Chi tiết</p>
      </div>
    </Link>
  )
}

const DashBtn = ({ name }) => {
  return (
    <Link to="/categories">
      <div className="col-span-1 py-4">
        <p className="font-medium">{name}</p>
      </div>
    </Link>
  )
}


export default function SideNav() {
  return (
    <>
      <div className="fixed w-64 h-screen z-10 py-4 px-6">
        <h1 className="text-lg font-bold py-4">Dashboard</h1>
        <hr class="my-4 md:min-w-full"></hr>
        <DashBtn name="Tổng quan" />
        <DashBtn name="Kho hàng" />
        <DashBtn name="Tin nhắn" />
        <DashBtn name="Đơn hàng" />
        <DashBtn name="Khách hàng" />
        <DashBtn name="Cài đặt" />
      </div>
      <div className="md:ml-64 bg-gray-50 min-h-screen">
        <div className="w-full z-10 bg-transparent md:flex-col md:flex-nowrap md:justify-start flex px-8">
          <h2 className="text-3xl font-medium py-12">Good afternoon, Zaini</h2>
          <div className="grid grid-cols-4 gap-8">
            <Category color="bg-purple-100" cat_icon={vanhoc} cat_name="Văn học Việt Nam" />
            <Category color="bg-yellow-100" cat_icon={kynang} cat_name="Kỹ năng sống" />
            <Category color="bg-red-100" cat_icon={khoahoc} cat_name="Khoa học" />
            <Category color="bg-purple-100" cat_icon={vanhoc} cat_name="Văn học Việt Nam" />
          </div>
        </div>
      </div>
    </>
  )
}