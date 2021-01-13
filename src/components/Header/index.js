import React from "react"
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import Logo from './logo.svg';
import user from '../../images/image2.png';
import cart from '../../images/image3.png';
import search from '../../images/image4.png';

{/* <Link to="/topics">Topics</Link> */ }

export default function Header() {
  return (
    <div className="container mx-auto w-full py-6 flex justify-between">
      <div className="left-side flex items-center">
        <Link to="/"><img src={Logo} alt="logo" /></Link>
        <Link to="/"><p className="pl-10">Trang chủ</p></Link>
        <Link to="/categories"><p className="pl-10">Danh mục</p></Link>
        <Link to="/"><p className="pl-10">Liên hệ</p></Link>
        <Link to="/"><p className="pl-10">Hỗ trợ</p></Link>
      </div>
      <div className="right-side flex items-center">
        <div className="w-64 bg-gray-200 p-2 flex items-center">
          <img src={search} alt="logo" />
        </div>
        {/* input here not div */}
        <img src={user} alt="logo" className="h-5 pl-10" />
        <img src={cart} alt="logo" className="h-6 pl-10" />
      </div>
    </div>
  )
}