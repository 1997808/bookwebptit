import {
  Link,
} from "react-router-dom";
import vanhoc from '../../images/image7.png';
import kynang from '../../images/image8.png';
import khoahoc from '../../images/image10.png';
import tieuthuyet from '../../images/image11.png';

const Category = ({ color, cat_icon, cat_name }) => {
  return (
    <Link to="/categories">
      <div className={`${color} p-10`}>
        <img src={cat_icon} alt="icon" />
        <p className="text-lg pt-2 font-medium">{cat_name}</p>
        <p className="text-sm">Chi tiết</p>
      </div>
    </Link>
  )
}

export default function FeatureCat() {
  return (
    <div className="container mx-auto w-full pt-20">
      <div className="flex justify-between items-center">
        <p className="text-3xl">Danh mục nổi bật</p>
        <Link to="/categories">
          <p>Xem thêm</p>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-8 pt-8">
        <Category color="bg-purple-100" cat_icon={vanhoc} cat_name="Văn học Việt Nam" />
        <Category color="bg-yellow-100" cat_icon={kynang} cat_name="Kỹ năng sống" />
        <Category color="bg-red-100" cat_icon={khoahoc} cat_name="Khoa học" />
        <Category color="bg-blue-100" cat_icon={tieuthuyet} cat_name="Tiểu thuyết" />
      </div>
    </div>
  )
}