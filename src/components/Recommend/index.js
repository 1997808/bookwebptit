import Book from "../book"
import { bookData } from "../../assets/book"

export default function Recommend() {
  const number = Math.floor(Math.random() * 13);
  return (
    <div className="container mx-auto w-full pt-20">
      <p className="text-3xl">Có thế bạn sẽ thích</p>
      <div className="grid grid-cols-4 pt-8">
        {bookData && bookData.slice(number, number + 4).map(items => {
          return (
            <Book key={items.id} id={items.id} photo={items.image} name={items.name} author={items.author} price={items.price} sale={items.sale} />
          )
        })}
      </div>
    </div>
  )
}