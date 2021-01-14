import {
  Link,
} from "react-router-dom";
import CartItem from "./CartItem"

export default function BookCart() {
  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-4 gap-4 p-8 border-b border-solid border-gray-200">
        <div className="col-span-2">
          <p className="font-semibold">Tên sản phẩm</p>
        </div>
        <p className="col-span-1 font-semibold">Giá tiền</p>
        <p className="col-span-1 font-semibold">Số lượng</p>
      </div>
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  )
}

// name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ"