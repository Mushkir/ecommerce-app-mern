import React, { useState } from "react";
import SignIn from "../assets/signin.gif";
import TheInput from "../components/TheInput";
import ThePasswordInput from "../components/ThePasswordInput";
import { Link } from "react-router-dom";
import imageToBase64 from "../helpers/helper";

const TheSignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((previousValue) => {
      return { ...previousValue, [id]: value };
    });
  };

  const handleImageUpload = async (e) => {
    const imgFileEl = e.target.files[0];

    const imgData = await imageToBase64(imgFileEl);

    setFormData({ ...formData, profilePic: imgData });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-white w-full max-w-md mx-auto mt-10 p-5 pb-6 rounded-md">
      <div className="relative">
        <div className="w-20 h-20 mx-auto rounded-full">
          <img
            src={formData.profilePic ? formData.profilePic : SignIn}
            className="rounded-full"
            alt="Login image"
          />
        </div>
        <form action="" method="post" onSubmit={handleSubmit}>
          <label
            className="text-xs w-full absolute top-[45px] text-center overflow-hidden"
            htmlFor="img"
          >
            <div className="opacity-5 hover:opacity-100 hover:transition-all">
              <span className="bg-slate-200 pt-2 pb-4 opacity-90 text-center cursor-pointer">
                Upload Image
              </span>
            </div>
            <div>
              <input
                type="file"
                className="hidden"
                id="img"
                onChange={handleImageUpload}
              />
            </div>
          </label>
        </form>
      </div>
      {/* {JSON.stringify(formData)} */}
      <form action="" method="post" onSubmit={handleSubmit}>
        {/* Name */}
        <TheInput
          id={"name"}
          label={"Name"}
          placeholder={"Enter your name"}
          value={formData.name}
          onChange={handleChange}
        />

        {/* Email */}
        <TheInput
          id={"email"}
          label={"Email"}
          type={"email"}
          placeholder={"Enter your email address"}
          onChange={handleChange}
          value={formData.email}
        />

        {/* Password */}
        <ThePasswordInput
          id={"password"}
          label={"Password"}
          placeholder={"Enter your password"}
          value={formData.password}
          onChange={handleChange}
        />

        {/* Confirm Password */}
        <ThePasswordInput
          id={"confirmPassword"}
          label={"Confirm Password"}
          placeholder={"Confirm Password"}
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <button className="mt-2 bg-red-500 text-white px-10 py-1.5 rounded-full mx-auto block hover:bg-red-700 hover:transition-all hover:scale-110">
          Sign up
        </button>
      </form>

      <span className="text-sm mt-3 block">
        Already have an account?{" "}
        <Link
          to={"/login"}
          className="text-red-500 hover:text-red-600 hover:underline"
        >
          Sign in
        </Link>
      </span>
    </div>
  );
};

export default TheSignUpPage;
