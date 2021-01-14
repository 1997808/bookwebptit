import {
  Link,
} from "react-router-dom";
import BookSmall from "../bookSmall"
import newBookBanner from '../../images/newBook.webp';
// import bookdemo from '../../images/bookdemo.png';

export default function NewRelease() {
  const bookdemo = "/images/bookdemo.png"
  return (
    <div className="container mx-auto w-full pt-20">
      <div className="flex justify-between items-center">
        <p className="text-3xl">Sách mới phát hành</p>
        <Link to="/categories">
          <p>Xem thêm</p>
        </Link>
      </div>
      <div className="w-full flex pt-8 items-stretch">
        <img src={newBookBanner} alt="banner" className="w-2/5 flex-grow object-cover" />
        <div className="w-3/5 grid grid-cols-3">
          <BookSmall photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
          <BookSmall photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
          <BookSmall photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
          <BookSmall photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
          <BookSmall photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
          <BookSmall photo={bookdemo} name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" />
        </div>
      </div>
    </div>
  )
}