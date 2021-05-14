import { Link } from "react-router-dom";
import Book from "../book";

export default function BestSelling({ allBookData }) {
  return (
    <div className="container mx-auto w-full pt-20">
      <div className="flex justify-between items-center">
        <p className="text-3xl">Sách bán chạy</p>
        <Link to="/book">
          <p>Xem thêm</p>
        </Link>
      </div>
      <div className="grid grid-cols-3 xl:grid-cols-5 pt-8">
        {allBookData &&
          allBookData.slice(2, 7).map((items) => {
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
  );
}
