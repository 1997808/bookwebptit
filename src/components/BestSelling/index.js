import {
  Link,
} from "react-router-dom";
import Book from "../book"
import bookdemo from '../../images/bookdemo.png';

export default function BestSelling() {
  return (
    <div className="container mx-auto w-full pt-20">
      <div className="flex justify-between items-center">
        <p className="text-3xl">Sách bán chạy</p>
        <p>Xem thêm</p>
      </div>
      <div className="grid grid-cols-4 pt-8">
        <Book photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
        <Book photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
        <Book photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
        <Book photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
        <Book photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
        <Book photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
        <Book photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
        <Book photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
      </div>
    </div>
  )
}