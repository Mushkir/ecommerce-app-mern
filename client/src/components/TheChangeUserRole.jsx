import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TheInput from "../components/TheInput";
import { IoCloseSharp } from "react-icons/io5";
import apiEndPointObj from "../common/api_uri";

const TheChangeUserRole = ({ userData, onClose, refreshHomePage }) => {
  const { _id } = userData;

  const [selectedUserData, setSelectedUserData] = useState({
    name: userData?.name || "",
    email: userData?.email || "",
  });

  const [userRole, setUserRole] = useState(userData?.role || "");

  const handleOnChange = (e) => {
    setSelectedUserData({ ...selectedUserData, [e.target.id]: e.target.value });
  };

  const handleRoleChange = async (id) => {
    try {
      const response = await fetch(
        apiEndPointObj.changeUserRole.url + `/${id}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const respData = await response.json();
      if (respData.error === false) {
        // Update the user role in local state
        setUserRole(userRole === "admin" ? "general" : "admin");
        refreshHomePage();
      }

      // console.log(respData);
    } catch (error) {
      console.error("From Change role: " + error.message);
    }
  };

  useEffect(() => {
    setUserRole(userData?.role || "");
    // setSelectedUserData({
    //   name: userData?.name || "",
    //   email: userData?.email || "",
    // });
  }, [userData]);

  return (
    <div className="fixed w-full h-full top-0 bottom-0 left-0 right-0 z-40 flex justify-center items-center bg-slate-200 bg-opacity-50">
      <div className="bg-white w-full max-w-md mx-auto rounded-md overflow-hidden">
        {/* Header */}
        <div className="bg-red-500 px-5 py-2 flex justify-between items-center">
          <h3 className="text-lg text-white">
            {userData?.name || "Guest"}&apos;s profile
          </h3>

          {/* Close icon */}
          <div
            className="text-white text-lg hover:bg-white rounded-full hover:text-red-500 cursor-pointer transition-all"
            onClick={onClose}
          >
            <IoCloseSharp />
          </div>
        </div>

        <form action="" className="p-5" method="post">
          {/* Profile img */}
          <div className="bg-red-500 w-40 max-w-40 h-40 max-h-40 rounded-full mx-auto p-1 mt-3">
            <img
              className="w-full h-full rounded-full mx-auto object-cover border-3 border-red-500"
              src={
                userData?.profilePic?.url ||
                "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"
              }
              alt={`${userData?.name}'s image`}
            />
          </div>

          {/* Role */}
          <div className="flex justify-center gap-1.5 mt-3">
            <span className="font-semibold text-gray-500">Role: </span>
            <span
              className={`bg-${
                userRole === "admin" ? "red-500" : "green-600"
              } px-2 rounded-full text-white capitalize`}
            >
              {userRole || "Guest"}
            </span>
          </div>

          {/* Input Components */}
          <div className="mt-5 mb-5">
            {/* Name */}
            <TheInput
              id="name"
              label="Name"
              placeholder=""
              value={selectedUserData.name}
              onChange={handleOnChange}
            />

            {/* Email */}
            <TheInput
              id="email"
              type="email"
              label="Email"
              placeholder=""
              onChange={handleOnChange}
              value={selectedUserData.email}
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => {
                handleRoleChange(_id);
              }}
              className="px-5 py-1.5 rounded-sm bg-red-500 text-white hover:bg-red-600 transition-all"
            >
              {userRole === "admin" ? "Make general" : "Make admin"}
            </button>
            <button className="px-5 py-1.5 rounded-sm border-[1px] border-red-500 text-red-500 hover:bg-red-600 hover:text-white transition-all">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

TheChangeUserRole.propTypes = {
  userData: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  refreshHomePage: PropTypes.func.isRequired,
};

export default TheChangeUserRole;
