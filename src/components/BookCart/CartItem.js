import bookdemo from '../../images/bookdemo.png';

export default function CartItem() {
  return (
    <div className="grid grid-cols-4 gap-4 p-8 border-b border-solid border-gray-200">
      <div className="col-span-1 flex justify-center">
        <img src={bookdemo} alt="book" className="w-full" />
      </div>
      <div className="col-span-1 flex flex-col justify-center">
        <p className="text-lg font-medium leading-6">Thắc mắc nhỏ, ngỏ cùng em – Cảm xúc</p>
        <p className="text-sm text-gray-400 mt-2">Astrid Dumontet - Julie Faulques</p>
      </div>
      <div className="col-span-1 flex flex-col justify-center">
        <p>39.500 VNĐ</p>
      </div>
      <div className="col-span-1 flex flex-col justify-center">
        <p>01</p>
      </div>
    </div>
  )
}