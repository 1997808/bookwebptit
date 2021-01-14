import {
  Link,
} from "react-router-dom";
import Book from "../book"
// import bookdemo from '../../images/bookdemo.png';

export default function BookList() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <p className="text-lg">Hiển thị 1-12 trong 126 kết quả</p>
        <p>Danh mục &gt; Kỹ năng sống</p>
      </div>
      {/* <div className="grid grid-cols-3 pt-8">
        <Book photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
        <Book photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
        <Book photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
        <Book photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
        <Book photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
        <Book photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
        <Book photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
        <Book photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
        <Book photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
      </div> */}

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