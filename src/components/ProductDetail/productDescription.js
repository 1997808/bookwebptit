import {
  Link,
} from "react-router-dom";

export default function ProductDescription() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center mt-6">
        <p className="font-semibold border-b border-solid border-black pb-6 mx-20">Mô tả</p>
        <p className="font-normal pb-6 mx-20">Chi tiết sản phẩm</p>
      </div>

      <div className="w-full py-8 flex flex-col border-t border-b border-solid border-gray-200">
        <p className="leading-7">Thắc mắc nhỏ, ngỏ cùng em là bộ sách đến từ nước Pháp, dành cho trẻ từ 6 tuổi trở lên. Sách giải đáp cho những câu hỏi vừa ngây thơ, vừa hóc búa của các em theo cách cơ bản, dễ hiểu cùng minh họa sinh động.<br />
      Bộ sách giúp các bé bước đầu khám phá những điều thú vị về cuộc sống, từ các khái niệm như Tốt và xầu; Chiến tranh và hòa bình; Giàu và nghèo cho tới các chủ đề gần gũi hơn như các cung bậc cảm xúc, tình cảm, tìm hiểu về giới tính và hệ bài tiết trong cơ thể.
      Đây là bộ sách rất lớn với gần 100 tựa sách của tập đoàn xuất bản Bayard Milan của Pháp, mỗi cuốn đều được viết và tư vấn bởi các chuyên gia giáo dục, cũng như chuyên gia trong các lĩnh vực mà cuốn sách nhắc đến.<br />
      Đợt phát hành đầu tiên này, Nhã Nam giới thiệu đến bạn đọc nhỏ 6 cuốn gồm các chủ đề sau đây:<br />
      - Cảm xúc<br />
      - Chiến tranh và hoà bình<br />
      - Tình yêu và tình bạn<br />
      - Tình yêu và giới tính<br />
      - Tốt và xấu<br />
      - Giàu và nghèo<br />
      Qua mỗi thắc mắc được giải đáp, các độc giả nhí sẽ thấu hiểu về cách sống hòa thuận với người khác; xây dựng thói quen làm những việc tốt, tránh xa điều xấu; tạo dựng lối sống khoa học để phát triển cân bằng và khỏe mạnh.</p>
      </div>

      <div className="flex justify-center items-center mt-6">
        <p className="font-normal pb-6 mx-20">Mô tả</p>
        <p className="font-semibold border-b border-solid border-black pb-6 mx-20">Chi tiết sản phẩm</p>
      </div>

      <div className="w-full py-8 flex justify-center border-t border-b border-solid border-gray-200">
        <div className="w-1/2 grid grid-cols-2 gap-40">
          <div className="col-span-1">
            <p className="text-sm font-bold">Hình thức</p>
            <p className="text-sm font-bold pt-5">Kích thước</p>
            <p className="text-sm font-bold pt-5">Ngày phát hành</p>
            <p className="text-sm font-bold pt-5">Công ty phát hành</p>
            <p className="text-sm font-bold pt-5">Mã hàng</p>
            <p className="text-sm font-bold pt-5">Nơi phát hành/Quốc gia</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm">Board Book | 36 trang</p>
            <p className="text-sm pt-5">235 x 205 mm | 50 gram</p>
            <p className="text-sm pt-5">15 tháng 07 năm 2020</p>
            <p className="text-sm pt-5">Nhã Nam</p>
            <p className="text-sm pt-5">5808907369962</p>
            <p className="text-sm pt-5">Hà Nội/Việt Nam</p>
          </div>
        </div>
      </div>
    </div>
  )
}