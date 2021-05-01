export default function CartItem({ id, photo, name, author, price, qty }) {
  return (
    <div className="grid grid-cols-7 gap-4 p-8 border-b border-solid border-gray-200">
      <div className="col-span-1 flex justify-center">
        <img
          src={`${process.env.PUBLIC_URL}${photo}`}
          alt="book"
          className="w-auto h-32"
        />
      </div>
      <div className="col-span-2 flex flex-col justify-center pr-4">
        <p className="text-base leading-6">{name}</p>
        <p className="text-sm text-gray-400 mt-2">{author}</p>
      </div>
      <div className="col-span-1 flex flex-col justify-center">
        <p>{price}</p>
      </div>
      <div className="col-span-1 flex flex-col justify-center pr-4">
        <input
          type="number"
          className="text-center border p-4 text-gray-500"
          step="1"
          min="1"
          max=""
          defaultValue={qty}
          inputMode="numeric"
        ></input>
      </div>
      <div className="col-span-1 flex flex-col justify-center">
        <p>{price}</p>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center">
        <p>Xóa</p>
      </div>
    </div>
  );
}
