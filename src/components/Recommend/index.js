import Book from "../book";

export default function Recommend({ allBookData }) {
  const number = Math.floor(Math.random() * 19);
  return (
    <div className="container mx-auto w-full pt-20">
      <p className="text-3xl">Có thế bạn sẽ thích</p>
      <div className="grid grid-cols-3 xl:grid-cols-5 pt-8">
        {allBookData &&
          allBookData.slice(number, number + 5).map((items) => {
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
