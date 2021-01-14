import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Signup from "../components/Log/signupForm"

export default function Logout() {
  return (
    <div className="">
      <Header />
      <div className="container mx-auto flex justify-center items-center py-8">
        <div className="w-1/3">
          <Signup />
        </div>
      </div>
      <Footer />
    </div>
  )
}