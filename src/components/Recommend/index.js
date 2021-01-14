import Book from "../book"
import { bookData } from "../../assets/book"

export default function Recommend() {
  return (
    <div className="container mx-auto w-full pt-20">
      <p className="text-3xl">Có thế bạn sẽ thích</p>
      <div className="grid grid-cols-4 pt-8">
        {bookData && bookData.slice(3, 7).map(items => {
          return (
            <Book photo={items.image} name={items.name} author={items.author} price={items.price} />
          )
        })}
      </div>
    </div>
  )
}