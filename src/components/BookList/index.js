import Book from "../book"
import { bookData } from "../../assets/book"

export default function BookList() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <p className="text-base">Hiển thị 1-12 trong 126 kết quả</p>
        <p>Kỹ năng sống</p>
      </div>
      <div className="grid grid-cols-4 pt-8">
        {bookData && bookData.map(items => {
          return (
            <Book key={items.id} id={items.id} photo={items.image} name={items.name} author={items.author} price={items.price} sale={items.sale} />
          )
        })}
      </div>

      <div class="bg-white px-4 py-3 flex items-center justify-center sm:px-6 pt-10">
        <div class="flex items-center justify-center">
          <nav class="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
            <a href="/categories" class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50">
              Trước
              </a>
            <a href="/categories" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              1
        </a>
            <a href="/categories" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              2
        </a>

            <a href="/categories" class="hidden md:inline-flex relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              3
        </a>
            <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
              </span>
            <a href="/categories" class="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50">
              Sau
              </a>
          </nav>
        </div>
      </div>
    </div>
  )
}