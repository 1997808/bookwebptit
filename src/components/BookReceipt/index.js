import React from "react"

export default function BookReceipt() {
  return (
    <React.Fragment>
      <div className="w-full bg-white">
        <div className="border border-solid p-8">
          <p className="font-medium text-center">Đơn đặt hàng của bạn đã được nhận</p>
          <div className="grid grid-cols-4 gap-10 pt-5">
            <div className="text-sm col-span-1">
              <p>Mã đơn hàng</p>
              <p className="font-medium">1779</p>
            </div>

            <div className="text-sm col-span-1">
              <p>Ngày đặt</p>
              <p className="font-medium">15/01/2020</p>
            </div>

            <div className="text-sm col-span-1">
              <p>Tổng cộng</p>
              <p className="font-medium">185.500 VNĐ</p>
            </div>

            <div className="text-sm col-span-1">
              <p>Hình thức thanh toán</p>
              <p className="font-medium truncate-1-lines">Thanh toán khi nhận hàng</p>
            </div>
          </div>
        </div>

        <div className="border border-solid p-8">
          <p className="font-medium">Sản phẩm</p>
          <div className="text-sm pt-5 flex justify-between">
            <p className="w-6/12 truncate-3-lines">Thắc mắc nhỏ, ngỏ cùng em – Cảm xúc</p>
            <p className="w-2/12 text-center">x 1</p>
            <p className="w-4/12 text-right">185.500 VNĐ</p>
          </div>

          <div className="text-sm pt-5 flex justify-between">
            <p className="w-6/12 truncate-3-lines">Lối sống tối giản của người Nhật</p>
            <p className="w-2/12 text-center">x 1</p>
            <p className="w-4/12 text-right">56.000 VNĐ</p>
          </div>
        </div>
        <div className="border border-solid p-8">
          <p className="font-medium">Đơn hàng</p>
          <div className="text-sm pt-5 flex justify-between">
            <p>Tổng phụ</p>
            <p>185.500 VNĐ</p>
          </div>
          <div className="text-sm pt-5 flex justify-between">
            <p>Vận chuyển</p>
            <p>Miễn phí</p>
          </div>
          <div className="text-sm pt-5 flex justify-between">
            <p>Hình thức thanh toán</p>
            <p>Thanh toán khi nhận hàng</p>
          </div>
        </div>
        <div className="border border-solid p-8">
          <div className="text-sm flex justify-between items-center">
            <p className="font-medium">Tổng cộng</p>
            <p className="text-lg">185.500 VNĐ</p>
          </div>
        </div>
        <div className="border border-solid p-8 grid grid-cols-2 gap-20">
          <div className="col-span-1">
            <p className="font-medium">Địa chỉ giao hàng</p>
            <p className="text-sm pt-5">122 Quang Trung</p>
            <p className="text-sm pt-5">Hà Nội, Việt Nam</p>
            <p className="text-sm pt-5">Giao vào buổi chiều đừng giao buổi sáng giao vào buổi chiều đừng giao buổi sáng</p>
          </div>

          <div className="col-span-1">
            <p className="font-medium">Thông tin người nhận</p>
            <p className="text-sm pt-5">Hoàng Lê Huân</p>
            <p className="text-sm pt-5">09342378643</p>
            <p className="text-sm pt-5">huanhoangle@gmail.com</p>
          </div>
        </div>
      </div >
    </React.Fragment>
  )
}