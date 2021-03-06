import React from "react";

import LoginForm from "../components/Log/loginForm";

export default function Login() {
  return (
    <div className="container mx-auto flex justify-center items-center py-8">
      <div className="w-1/2 xl:w-1/3">
        <LoginForm />
      </div>
    </div>
  );
}
