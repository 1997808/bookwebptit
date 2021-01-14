import {
  Link,
} from "react-router-dom";

export default function Payment() {
  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-4 gap-4 p-8 border-b border-solid border-gray-200">
        <div className="col-span-2">
          <p className="font-semibold">Tên sản phẩm</p>
        </div>
        <p className="col-span-1 font-semibold">Giá tiền</p>
        <p className="col-span-1 font-semibold">Số lượng</p>
      </div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

// name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ" họ tên, điện thoại, địa chỉ, thành phố, quận huyện, phường xá, loại địa chỉ nhà / công ty, ghi chú