import React, { useState } from "react";
import PropTypes from "prop-types";
import TheInput from "../components/TheInput";
import { IoCloseSharp } from "react-icons/io5";

const TheChangeUserRole = ({ userData }) => {
  // console.log();
  const [selectedUserData, setSelectedUserData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleOnChange = (e) => {
    setSelectedUserData({ ...selectedUserData, [e.target.id]: e.target.value });
  };

  // console.log(selectedUserData);

  return (
    <div className="fixed w-full h-full top-0 bottom-0 left-0 right-0 z-40 flex justify-center items-center bg-slate-200 bg-opacity-50">
      <div className="bg-white w-full max-w-md mx-auto rounded-md overflow-hidden">
        {/* Header */}
        <div className="bg-red-500 px-5 py-2 flex justify-between items-center">
          <h3 className="text-lg text-white">
            {userData?.name || "Guest"}&apos;s profile detail
          </h3>

          {/* Close icon */}
          <div className="text-white text-lg hover:bg-white rounded-full hover:text-red-500 cursor-pointer transition-all">
            <IoCloseSharp />
          </div>
        </div>

        <form action="" className="p-5" method="post">
          {/* Profile img */}
          <div className="bg-red-500 w-40 max-w-40 h-40 max-h-40 rounded-full mx-auto p-1 mt-3  ">
            <img
              className="w-full h-full rounded-full mx-auto object-cover bordr-3 border-red-500"
              src="https://thalamusgme.com/wp-content/uploads/2019/06/Screen-Shot-2019-04-14-at-5.55.53-AM.png"
              alt=""
            />
          </div>

          {/* Name */}
          <TheInput
            id="name"
            label="Name"
            placeholder=""
            value={userData?.name || ""}
            onChange={handleOnChange}
          />

          {/* Email */}
          <TheInput
            id="email"
            type="email"
            label="Email"
            onChange={handleOnChange}
            value={userData?.email || ""}
          />

          {/*  */}
        </form>
      </div>
    </div>
  );
};

TheChangeUserRole.propTypes = {
  userData: PropTypes.object,
};

export default TheChangeUserRole;
