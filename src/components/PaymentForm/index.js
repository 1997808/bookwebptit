import React, { useState } from "react"

export default function Payment() {
  const [name, setName] = useState("")

  return (
    <div className="w-full bg-white">
      <form className="p-8 border-b border-solid border-gray-200" onSubmit={() => { }}>
        <p className="text-lg font-semibold">Địa chỉ giao hàng</p>
        <div className="pt-5">
          <p className="font-medium mb-2">Họ tên</p>
          <input type="text" value={name} onChange={event => setName(event.target.value)} className="h-12 w-full focus:outline-none border border-gray-200 px-4" />
        </div>

        <div className="pt-5">
          <p className="font-medium mb-2">Điện thoại</p>
          <input type="text" value={name} onChange={event => setName(event.target.value)} className="h-12 w-full focus:outline-none border border-gray-200 px-4" />
        </div>

        <div className="pt-5">
          <p className="font-medium mb-2">Thành phố</p>
          <input type="text" value={name} onChange={event => setName(event.target.value)} className="h-12 w-full focus:outline-none border border-gray-200 px-4" />
        </div>

        <div className="pt-5">
          <p className="font-medium mb-2">Địa chỉ</p>
          <input type="text" value={name} onChange={event => setName(event.target.value)} className="h-12 w-full focus:outline-none border border-gray-200 px-4" />
        </div>

        <p className="text-lg font-semibold pt-10">Thông tin bổ sung</p>
        <div className="pt-5">
          <p className="font-medium mb-2">Ghi chú</p>
          <textarea type="text" rows={6} value={name} onChange={event => setName(event.target.value)} className="w-full focus:outline-none border border-gray-200 p-4" />
        </div>
      </form>
    </div>
  )
}