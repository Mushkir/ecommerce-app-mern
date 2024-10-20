import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import apiEndPointObj from "../common/api_uri";
import dayjs from "dayjs";
import TheChangeUserRole from "../components/TheChangeUserRole";

const TheAllUsersPage = () => {
  let no = 1;
  const [allUsers, setAllUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [showModal, setShowModal] = useState(false);

  const getAllUsersData = async () => {
    try {
      const response = await fetch(apiEndPointObj.getAllUsers.url, {
        method: apiEndPointObj.getAllUsers.method,
        credentials: "include",
      });

      const usersData = await response.json();
      // console.log(usersData.totalUsers);
      setAllUsers(usersData?.totalUsers);
    } catch (error) {
      console.error("Error from get all users: " + error.message);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="font-Sen">
      <h3 className="text-xl text-center mb-3 font-semibold text-red-500">
        All users detail...
      </h3>
      <table className="table w-full">
        <thead className="bg-red-500 text-white">
          <tr>
            <th className="p-3 text-center text-md">S.No</th>
            <th className="p-3 text-center text-md">Name</th>
            <th className="p-3 text-center text-md">Email</th>
            <th className="p-3 text-center text-md">Image</th>
            <th className="p-3 text-center text-md">Role</th>
            <th className="p-3 text-center text-md">Created Date</th>
            <th className="p-3 text-center text-md">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {allUsers.length > 0 ? (
            allUsers.map((users) => {
              // console.log(users);
              const { _id, name, email, profilePic, role, createdAt } = users;
              return (
                <tr key={_id}>
                  <td className=" border-2 p-2 text-center text-black">
                    #{no++}
                  </td>
                  <td className=" border-2 p-2 text-left text-black">{name}</td>
                  <td className=" border-2 p-2 text-left text-black">
                    <Link to={`mailto:${email}`}>{email}</Link>
                  </td>
                  <td className=" border-2 p-2 text-center">
                    <img
                      className="w-28 h-40 object-cover mx-auto"
                      src={profilePic?.url}
                      alt=""
                    />
                  </td>
                  <td className=" border-2 p-2 text-center capitalize text-black">
                    {role === "admin" ? (
                      <span className="bg-red-500 px-1.5 py-1 rounded-full text-white">
                        {" "}
                        {role}
                      </span>
                    ) : (
                      <span className="bg-green-500 px-1.5 py-1 rounded-full text-white">
                        {" "}
                        {role}
                      </span>
                    )}
                  </td>
                  <td className=" border-2 p-2 text-center text-black">
                    {dayjs(createdAt).format("ddd, DD-MMM-YYYY")}
                  </td>
                  <td
                    className=" border-2 p-2 text-center text-black"
                    onClick={() => {
                      setSelectedUser(users);
                      setShowModal(true);
                    }}
                  >
                    <div className="bg-green-200 w-10 h-10 max-w-10 max-h-10 mx-auto hover:bg-green-600 p-2 flex justify-center items-center rounded-full hover:text-white transition-all cursor-pointer text-black">
                      <MdEdit />
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="7" className="text-center p-2">
                Currently no users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Change user role pop-up modal */}
      {showModal && (
        <TheChangeUserRole
          userData={selectedUser}
          onClose={closeModal}
          refreshHomePage={getAllUsersData}
        />
      )}
    </div>
  );
};

export default TheAllUsersPage;
