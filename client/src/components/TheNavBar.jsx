import React, { useState } from "react";
import TheLogo from "./TheLogo";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserLogout } from "../redux/user/userSlice";
import apiEndPointObj from "../common/api_uri";

const TheNavBar = () => {
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  // console.log(currentUser.currentUser.name);
  const [openMenuGroup, setOpenMenuGroup] = useState(false);

  const navigateToLogin = () => {
    navigate("/login");
  };

  const proceedLogout = async () => {
    const response = await fetch(apiEndPointObj.logoutEndPoint.url, {
      method: apiEndPointObj.logoutEndPoint.method,
      credentials: "include",
    });

    const respData = await response.json();
    // console.log(respData);

    if (respData.error === false) {
      if (currentUser?.currentUser) {
        dispatch(UserLogout(currentUser));
      }
    }
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md h-16 font-Sen">
      <div className="h-full container mx-auto px-4 flex justify-between items-center">
        <div>
          <Link to={"/"}>
            <TheLogo w={90} h={50} />
          </Link>
        </div>

        {/* Search bar */}
        <div className="flex justify-between items-center w-full max-w-sm border rounded-full focus-within:shadow-md pl-2">
          <input
            type="text"
            name="search-product"
            id="search-product"
            className="w-full outline-none "
            placeholder="Search your products..."
          />
          <div className="text-lg min-w-[50px] flex justify-center items-center h-8 rounded-r-full bg-red-500 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68"
              />
            </svg>
          </div>
        </div>

        {/* User icons */}
        <div className="flex items-center gap-5">
          {/* User */}
          <div
            className="cursor-pointer relative group flex justify-center"
            onClick={() => setOpenMenuGroup(!openMenuGroup)}
          >
            {currentUser?.currentUser ? (
              <img
                src={currentUser?.currentUser?.profilePic?.url}
                className="w-10 h-10 object-cover rounded-full cursor-pointer"
                alt={`${currentUser?.currentUser?.name}'s  profile picture`}
                // onClick={() => navigate("/profile")}
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 11q.825 0 1.413-.588Q14 9.825 14 9t-.587-1.413Q12.825 7 12 7q-.825 0-1.412.587Q10 8.175 10 9q0 .825.588 1.412Q11.175 11 12 11Zm0 2q-1.65 0-2.825-1.175Q8 10.65 8 9q0-1.65 1.175-2.825Q10.35 5 12 5q1.65 0 2.825 1.175Q16 7.35 16 9q0 1.65-1.175 2.825Q13.65 13 12 13Zm0 11q-2.475 0-4.662-.938q-2.188-.937-3.825-2.574Q1.875 18.85.938 16.663Q0 14.475 0 12t.938-4.663q.937-2.187 2.575-3.825Q5.15 1.875 7.338.938Q9.525 0 12 0t4.663.938q2.187.937 3.825 2.574q1.637 1.638 2.574 3.825Q24 9.525 24 12t-.938 4.663q-.937 2.187-2.574 3.825q-1.638 1.637-3.825 2.574Q14.475 24 12 24Zm0-2q1.8 0 3.375-.575T18.25 19.8q-.825-.925-2.425-1.612q-1.6-.688-3.825-.688t-3.825.688q-1.6.687-2.425 1.612q1.3 1.05 2.875 1.625T12 22Zm-7.7-3.6q1.2-1.3 3.225-2.1q2.025-.8 4.475-.8q2.45 0 4.463.8q2.012.8 3.212 2.1q1.1-1.325 1.713-2.95Q22 13.825 22 12q0-2.075-.788-3.887q-.787-1.813-2.15-3.175q-1.362-1.363-3.175-2.151Q14.075 2 12 2q-2.05 0-3.875.787q-1.825.788-3.187 2.151Q3.575 6.3 2.788 8.113Q2 9.925 2 12q0 1.825.6 3.463q.6 1.637 1.7 2.937Z"
                />
              </svg>
            )}

            {/* Group menu for Admin panel */}
            {openMenuGroup && (
              <div className=" absolute top-11 bg-white p-2 w-fit">
                <nav className="whitespace-nowrap">
                  <Link to={"/admin/all-users"}>Admin Panel</Link>
                </nav>
              </div>
            )}
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 2v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12l.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2"
              />
            </svg>

            <span className="text-sm absolute flex items-center bg-red-500 w-5 h-5 text-white p-1 rounded-full -top-3 -right-3">
              0
            </span>
          </div>

          {/* Login */}
          <div>
            {currentUser?.currentUser ? (
              <button
                className="px-5 py-1.5 text-white rounded-full bg-red-500 hover:bg-red-600"
                onClick={proceedLogout}
              >
                Logout
              </button>
            ) : (
              <button
                className="px-5 py-1.5 text-white rounded-full bg-red-500 hover:bg-red-600"
                onClick={navigateToLogin}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TheNavBar;
