import React from "react";
import SignupForm from "../components/Log/signupForm";

export default function Signup() {
  return (
    <div className="container mx-auto flex justify-center items-center py-8">
      <div className="w-1/2 xl:w-1/3">
        <SignupForm />
      </div>
    </div>
  );
}
