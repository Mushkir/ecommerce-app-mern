import React, { useState } from "react";
import SignIn from "../assets/signin.gif";
import TheInput from "../components/TheInput";
import ThePasswordInput from "../components/ThePasswordInput";

const TheLoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  return (
    <div className="bg-white w-full max-w-md mx-auto mt-10 p-5 rounded-md">
      <div>
        <img className="w-20 h-20 mx-auto" src={SignIn} alt="Login image" />
      </div>
      {/* {JSON.stringify(formData)} */}
      <form action="" method="post">
        <TheInput
          label={"Email"}
          type={"email"}
          id={"email"}
          placeholder={"Enter your email"}
          value={formData.email}
          onChange={handleChange}
        />

        <ThePasswordInput
          label={"Password"}
          id={"password"}
          placeholder={"Enter your password"}
          value={formData.password}
          onChange={handleChange}
        />

        <button className="bg-red-600 px-14 py-1.5 rounded-full text-white mx-auto block mt-5 hover:scale-110 hover:transition-all">
          Login
        </button>
      </form>
    </div>
  );
};

export default TheLoginPage;
