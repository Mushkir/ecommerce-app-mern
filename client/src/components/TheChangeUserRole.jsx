import React, { useState } from "react";
import PropTypes from "prop-types";
import TheInput from "../components/TheInput";

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
      <div className="bg-white mx-auto max-w-sm p-5">
        <h1>{userData?.name || "Guest"}&apos;s profile detail</h1>

        <form action="" method="post">
          <TheInput
            id="name"
            label="Name"
            placeholder=""
            value={userData?.name || ""}
            onChange={handleOnChange}
          />

          <TheInput
            id="email"
            type="email"
            label="Email"
            onChange={handleOnChange}
            value={userData?.email || ""}
          />
        </form>
      </div>
    </div>
  );
};

TheChangeUserRole.propTypes = {
  userData: PropTypes.object,
};

export default TheChangeUserRole;
