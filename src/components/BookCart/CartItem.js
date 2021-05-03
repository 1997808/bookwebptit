import { useDispatch } from "react-redux";
import { addItem, reduceItem, removeItem } from "../../actions/index";

export default function CartItem({ id, photo, name, author, price, qty }) {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-6 gap-4 p-8 border-b border-solid border-gray-200">
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
      <div className="col-span-1 flex items-center">
        <button
          className="border focus:outline-none p-4"
          onClick={() => dispatch(reduceItem(id))}
        >
          -
        </button>
        <div className="text-center border w-16 p-4 px-6 text-gray-500 focus:outline-none">
          {qty}
        </div>
        <button
          className="border focus:outline-none p-4"
          onClick={() => dispatch(addItem(id))}
        >
          +
        </button>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <p
          className="w-1/2 text-center cursor-pointer"
          onClick={() => dispatch(removeItem(id))}
        >
          Xóa
        </p>
      </div>
    </div>
  );
}
