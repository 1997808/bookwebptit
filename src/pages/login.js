import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import LoginForm from "../components/Log/loginForm"

export default function Login() {
  return (
    <div>
      <Header />
      <div className="container mx-auto flex justify-center items-center py-8">
        <div className="w-1/3">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}