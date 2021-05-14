import { Link } from "react-router-dom";
import Book from "../book";
import newBookBanner from "../../images/newBook.webp";

export default function NewRelease({ newBookData }) {
  return (
    <div className="container mx-auto w-full pt-20">
      <div className="flex justify-between items-center">
        <p className="text-3xl">Sách mới phát hành</p>
        <Link to="/book">
          <p>Xem thêm</p>
        </Link>
      </div>
      <div className="w-full flex pt-8 items-stretch">
        <img
          src={newBookBanner}
          alt="banner"
          className="w-2/5 flex-grow object-cover"
        />
        <div className="w-3/5 grid grid-cols-2 xl:grid-cols-3">
          {newBookData &&
            newBookData.map((items) => {
              return (
                <Book
                  key={items.id}
                  id={items.id}
                  photo={items.image}
                  name={items.name}
                  author={items.author}
                  price={items.price}
                  discount={items.discount}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
