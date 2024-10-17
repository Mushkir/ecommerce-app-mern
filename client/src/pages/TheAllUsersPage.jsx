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
  // console.log(selectedUser.name);

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

  return (
    <div className="font-Sen">
      <h3 className="text-xl text-center mb-3 font-semibold text-red-500">
        All users detail...
      </h3>
      <table className="table w-full">
        <thead className="bg-red-500 text-white">
          <tr>
            <th className="p-2">S.No</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Image</th>
            <th className="p-2">Role</th>
            <th className="p-2">Created Date</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {allUsers.length > 0 ? (
            allUsers.map((users, index) => {
              // console.log(users);
              const { _id, name, email, profilePic, role, createdAt } = users;
              return (
                <tr key={_id}>
                  <td className=" border-2 p-2 text-center">#{no++}</td>
                  <td className=" border-2 p-2 text-left">{name}</td>
                  <td className=" border-2 p-2 text-left">
                    <Link to={`mailto:${email}`}>{email}</Link>
                  </td>
                  <td className=" border-2 p-2 text-center">
                    <img
                      className="w-28 h-40 object-cover mx-auto"
                      src={profilePic?.url}
                      alt=""
                    />
                  </td>
                  <td className=" border-2 p-2 text-center capitalize">
                    {role}
                  </td>
                  <td className=" border-2 p-2 text-center">
                    {dayjs(createdAt).format("ddd, DD-MMM-YYYY")}
                  </td>
                  <td
                    className=" border-2 p-2 text-center"
                    onClick={() => {
                      setSelectedUser(users);
                    }}
                  >
                    <div className="bg-green-200 w-10 h-10 max-w-10 max-h-10 mx-auto hover:bg-green-600 p-2 flex justify-center items-center rounded-full hover:text-white transition-all cursor-pointer">
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
      <TheChangeUserRole userData={selectedUser} />
    </div>
  );
};

export default TheAllUsersPage;
