import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignIn from "../assets/signin.gif";
import TheInput from "../components/TheInput";
import ThePasswordInput from "../components/ThePasswordInput";
import apiEndPointObj from "../common/api_uri";
import { useDispatch } from "react-redux";
import { UserLoggedIn } from "../redux/user/userSlice";

const TheLoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "Pa$$w0rd!",
  });

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;
    if (!email || !password) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }

    const response = await fetch(apiEndPointObj.loginEndPoint.url, {
      method: apiEndPointObj.loginEndPoint.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.error === true) {
      setErrorMsg(data.message);
      return;
    }
    // console.log(data);
    const { resp } = data;

    dispatch(UserLoggedIn(resp));
    if (resp.role === "admin") {
      // navigate("/admin/all-users");
    } else {
      navigate("/");
    }
    // console.log(data);
  };

  return (
    <div className="bg-white w-full max-w-md mx-auto mt-32 p-5 pb-6 rounded-md font-Sen">
      <div>
        <img className="w-20 h-20 mx-auto" src={SignIn} alt="Login image" />
      </div>

      {/* {JSON.stringify(formData)} */}
      <small className="block text-red-600 font-semibold text-center mt-4">
        {error === true ? "All fields are required!" : errorMsg ? errorMsg : ""}
      </small>
      <form action="" method="post" onSubmit={handleSubmit}>
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

        <Link
          to={"/forgot-password"}
          className="text-sm text-right block hover:text-red-500 hover:underline"
        >
          Forgot password?
        </Link>

        <button className="bg-red-600 px-14 py-1.5 rounded-full text-white mx-auto block mt-5 hover:scale-110 hover:transition-all">
          Login
        </button>
      </form>
      <span className="text-sm mt-5 block">
        Don&apos;t have an account?{" "}
        <Link
          to={"/sign-up"}
          className="text-red-500 hover:underline hover:text-red-700"
        >
          Sign up
        </Link>{" "}
      </span>
    </div>
  );
};

export default TheLoginPage;
