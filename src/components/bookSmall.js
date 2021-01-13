import {
  Link,
} from "react-router-dom";

export default function BookSmall({ photo, name, author, price, sale }) {
  return (
    <div className="p-8 border border-solid border-gray-200">
      <img src={photo} alt="icon" className="h-auto w-full" />
      {sale ? <p className="text-xs uppercase text-red-500">Giảm giá</p> : <div className="h-4"></div>}
      <p className="text-base font-medium truncate-2-lines h-14">{name}</p>
      <p className="text-sm text-gray-400">{author}</p>
      <p className="text-lg font-medium">{price}</p>
    </div>
  )
}