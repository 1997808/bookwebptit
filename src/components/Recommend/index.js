import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import Book from "../book"
import bookdemo from '../../images/bookdemo.png';

export default function Recommend() {
  return (
    <div className="container mx-auto w-full pt-20">
      <p className="text-3xl">Có thế bạn sẽ thích</p>
      <div className="grid grid-cols-4 pt-8">
        <Book photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
        <Book photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
        <Book photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
        <Book photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
      </div>
    </div>
  )
}