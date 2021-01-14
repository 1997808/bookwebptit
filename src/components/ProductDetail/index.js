import {
  Link,
} from "react-router-dom";
import bookdemo from '../../images/bookdemo.png';

export default function ProductDetail() {
  return (
    <div className="container mx-auto w-full mt-10 flex flex-grow border-t border-b border-solid border-gray-200">
      <div className="w-4/12 p-10 border-r border-solid border-gray-200 flex justify-center items-center">
        <img src={bookdemo} className="w-full" />
      </div>
      <div className="w-8/12 p-10">
        <p className="text-2xl font-medium">Thắc mắc nhỏ, ngỏ cùng em – Cảm xúc</p>
        <p className="pt-6">Tác giả <span className="text-gray-400 pl-4">Astrid Dumontet - Julie Faulques</span></p>
        <p className="text-2xl font-medium pt-6">39.500 VNĐ</p>
        <p className="pt-6">Thắc mắc nhỏ, ngỏ cùng em là bộ sách đến từ nước Pháp, dành cho trẻ từ 6 tuổi trở lên. Sách giải đáp cho những câu hỏi vừa ngây thơ, vừa hóc búa của các em theo cách cơ bản, dễ hiểu cùng minh họa sinh động.
        Bộ sách giúp các bé bước đầu khám phá những điều thú vị về cuộc sống, từ các khái niệm như Tốt và xầu; Chiến tranh và hòa bình; Giàu và nghèo cho tới các chủ đề gần gũi hơn như các cung bậc cảm xúc, tình cảm, tìm hiểu về giới tính và hệ bài tiết trong cơ thể.</p>
        <div className="h-12 w-48 flex justify-center items-center bg-black mt-6">
          <p className="text-white">Thêm vào giỏ hàng</p>
        </div>
      </div>
    </div>
  )
}

// name="Lối sống tối giản của người Nhật" author="Sasaki Fumio" price="56.000 VNĐ"