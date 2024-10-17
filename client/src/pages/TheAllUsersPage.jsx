import React from "react";
import { MdEdit } from "react-icons/md";

const TheAllUsersPage = () => {
  return (
    <div className="font-Sen">
      <table className="table table-fixed w-full">
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
          <tr>
            <td className="p-2 text-center">AAAA</td>
            <td className="p-2 text-center">AAAA</td>
            <td className="p-2 text-center">AAAA</td>
            <td className="p-2 text-center">
              <img
                className="w-28 h-20 object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEryBtSZWaHIWfwk2AaGI_x_wIQ9KIoP3ntw&s"
                alt=""
              />
            </td>
            <td className="p-2 text-center">AAAA</td>
            <td className="p-2 text-center">AAAA</td>
            <td className="p-2 text-center flex justify-center items-center">
              <div className="bg-green-200 hover:bg-green-600 p-2 rounded-full hover:text-white transition-all cursor-pointer">
                <MdEdit />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TheAllUsersPage;
