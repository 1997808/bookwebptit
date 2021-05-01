import CartItem from "./CartItem";

export default function BookCart({ data }) {
  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-7 gap-4 p-8 border-b border-solid border-gray-200">
        <div className="col-span-3">
          <p className="font-semibold">Tên sản phẩm</p>
        </div>
        <p className="col-span-1 font-semibold">Giá tiền</p>
        <p className="col-span-1 font-semibold">Số lượng</p>
        <p className="col-span-1 font-semibold">Tổng cộng</p>
        <p className="col-span-1 font-semibold"></p>
      </div>
      {data &&
        data.map((items) => {
          <CartItem />;
        })}
    </div>
  );
}
