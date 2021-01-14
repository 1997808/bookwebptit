import { bookData } from "../../assets/book"

export default function ProductDescription({ id }) {
  const data = bookData.filter(items => items.id === id)[0]

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center mt-6">
        <p className="font-semibold border-b border-solid border-black pb-6 mx-20">Mô tả</p>
        <p className="font-normal pb-6 mx-20">Chi tiết sản phẩm</p>
      </div>

      <div className="w-full py-8 flex flex-col border-t border-b border-solid border-gray-200">
        <p className="leading-7">{data.description}</p>
      </div>

      <div className="flex justify-center items-center mt-6">
        <p className="font-normal pb-6 mx-20">Mô tả</p>
        <p className="font-semibold border-b border-solid border-black pb-6 mx-20">Chi tiết sản phẩm</p>
      </div>

      <div className="w-full py-8 flex justify-center border-t border-b border-solid border-gray-200">
        <div className="w-1/2 grid grid-cols-2 gap-40">
          <div className="col-span-1">
            <p className="text-sm font-bold">Hình thức</p>
            <p className="text-sm font-bold pt-5">Kích thước</p>
            <p className="text-sm font-bold pt-5">Dịch giả</p>
            <p className="text-sm font-bold pt-5">Công ty phát hành</p>
            <p className="text-sm font-bold pt-5">Mã hàng</p>
            <p className="text-sm font-bold pt-5">Danh mục</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm">{data.pages} trang</p>
            <p className="text-sm pt-5">{data.size} cm</p>
            <p className="text-sm pt-5">{data.translator ? data.translator : "N/A"}</p>
            <p className="text-sm pt-5">{data.publisher}</p>
            <p className="text-sm pt-5">{data.id}</p>
            <p className="text-sm pt-5">{data.category}</p>
          </div>
        </div>
      </div>
    </div>
  )
}