import React from "react";

import LoginForm from "../components/Log/loginForm";

export default function Login() {
  return (
    <div>
      <div className="container mx-auto flex justify-center items-center py-8">
        <div className="x-1/2 xl:w-1/3">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
