import bookdemo from "../../images/bookdemo.png";

export default function CartItem() {
  return (
    <div className="grid grid-cols-7 gap-4 p-8 border-b border-solid border-gray-200">
      <div className="col-span-3 flex justify-center">
        <img src={bookdemo} alt="book" className="w-auto h-32 pr-4" />
        <div className="flex flex-col justify-center">
          <p className="text-base leading-6">
            Thắc mắc nhỏ, ngỏ cùng em – Cảm xúc
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Astrid Dumontet - Julie Faulques
          </p>
        </div>
      </div>
      <div className="col-span-1 flex flex-col justify-center">
        <p>39.500 VNĐ</p>
      </div>
      <div className="col-span-1 flex flex-col justify-center pr-4">
        <input
          type="number"
          className="text-center border p-4 text-gray-500"
          step="1"
          min="1"
          max=""
          defaultValue="1"
          inputMode="numeric"
        ></input>
      </div>
      <div className="col-span-1 flex flex-col justify-center">
        <p>39.500 VNĐ</p>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center">
        <p>Xóa</p>
      </div>
    </div>
  );
}
