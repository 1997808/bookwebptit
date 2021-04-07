import { bookData } from "../../assets/book"

export default function ProductDetail({ id }) {
  const data = bookData.filter(items => items.id === id)[0]

  return (
    <div className="container mx-auto w-full mt-10 flex flex-grow border-t border-b border-solid border-gray-200">
      <div className="w-4/12 p-10 border-r border-solid border-gray-200 flex justify-center items-center">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} className="w-full h-80 object-scale-down" alt="book" />
      </div>
      <div className="w-8/12 p-10">
        <p className="text-2xl font-medium">{data.name}</p>
        <p className="pt-6">Tác giả <span className="text-gray-400 pl-4">{data.author}</span></p>
        <p className="text-2xl font-medium pt-6">{data.price}</p>
        <p className="pt-6 truncate-4-lines">{data.description}</p>
        <div className="h-12 w-48 flex justify-center items-center bg-black mt-6">
          <p className="text-white">Thêm vào giỏ hàng</p>
        </div>
      </div>
    </div>
  )
}