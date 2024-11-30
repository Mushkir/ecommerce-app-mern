import React, { useContext, useState } from "react";
import TheLogo from "./TheLogo";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserLogout } from "../redux/user/userSlice";
import apiEndPointObj from "../common/api_uri";
import Context from "../context/context";
import { GiShoppingCart } from "react-icons/gi";
import { BsCartFill } from "react-icons/bs";

const TheNavBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("product") || ""
  );

  const { countCartItem } = useContext(Context);
  // console.log(context);

  const currentUser = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  // console.log(currentUser.currentUser);
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

  const handleSearchProduct = (e) => {
    const { value } = e.target;
    setSearchParams({ product: searchQuery });
    setSearchQuery(value);

    if (value) {
      navigate(`/search?product=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate("/search");
    }
  };

  return (
    <header className="bg-white shadow-md h-16 font-Sen fixed top-0 left-0 right-0 bottom-0 z-10">
      <div className="h-full container mx-auto px-4 flex justify-between items-center">
        <div>
          <Link to={"/"}>
            <TheLogo />
          </Link>
        </div>

        {/* Search bar */}
        <div className="flex justify-between items-center w-full max-w-sm border rounded-full focus-within:shadow-md pl-2">
          <input
            type="text"
            name="search-product"
            id="searchProduct"
            className="w-full outline-none"
            placeholder="Search your products..."
            value={searchQuery}
            onChange={(e) => handleSearchProduct(e)}
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
            {currentUser?.currentUser?._id && (
              <img
                src={currentUser?.currentUser?.profilePic?.url}
                className="w-10 h-10 object-cover rounded-full cursor-pointer"
                alt={`${currentUser?.currentUser?.name}'s  profile picture`}
                // onClick={() => navigate("/profile")}
              />
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
          {currentUser?.currentUser?._id && (
            <Link to={"/cart"} className="relative cursor-pointer">
              <div className="text-black text-2xl">
                {countCartItem > 0 ? <BsCartFill /> : <GiShoppingCart />}
              </div>

              {countCartItem > 0 && (
                <span className="text-sm absolute flex items-center bg-red-500 w-5 h-5 text-white p-1 rounded-full -top-3 -right-3">
                  {countCartItem}
                </span>
              )}
            </Link>
          )}

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
