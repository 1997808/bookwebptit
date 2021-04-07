import React from "react"

export default function CatFilter() {
  return (
    <div className="w-full">
      <div className="border border-solid p-8">
        <p className="text-2xl font-medium pb-0.5">Danh mục</p>
      </div>
      <div className="border border-solid px-8 py-4">
        <p className="font-medium">Văn học</p>
        <p className="text-sm pt-5">Văn học Việt Nam</p>
        <p className="text-sm pt-5">Văn học nước ngoài</p>
        <p className="text-sm pt-5">Văn học thiếu nhi</p>
        <p className="text-sm pt-5">Văn học hiện đại</p>
      </div>
      <div className="border border-solid px-8 py-4">
        <p className="font-medium">Giáo dục</p>
        <p className="text-sm pt-5">Sách Lịch sử</p>
        <p className="text-sm pt-5">Sách Kinh tế</p>
        <p className="text-sm pt-5">Sách Khoa học - Kỹ thuật</p>
      </div>
      <div className="border border-solid px-8 py-4">
        <p className="font-medium">Kỹ năng sống</p>
        <p className="text-sm pt-5">Sách dạy nấu ăn</p>
        <p className="text-sm pt-5">Tự giúp bản thân</p>
        <p className="text-sm pt-5">Kỹ năng mềm</p>
      </div>
      <div className="border border-solid px-8 py-4">
        <p className="font-medium">Khác</p>
        <p className="text-sm pt-5">Tiểu thuyết</p>
        <p className="text-sm pt-5">Ngôn tình</p>
        <p className="text-sm pt-5">Trinh thám</p>
        <p className="text-sm pt-5">Giả tưởng</p>
        <p className="text-sm pt-5">Kinh dị</p>
      </div>
    </div >
  )
}