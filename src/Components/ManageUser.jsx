import React, { useEffect, useState } from "react";
import Pages from "./Pages";
import { getAllUsers } from "../services/userService";

const ManageUser = () => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    getAllUsers(0).then((response) => {
      setUsers(response);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const changePage = (pageNumber) => {
    getAllUsers(pageNumber).then((response) => {
      setUsers(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 mx-1 my-1 rounded-2xl">
      <h1 className="text-3xl font-bold mb-6">Manage Users</h1>

      {/* User List */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Users List</h2>
        <table className="w-full text-left text-gray-300">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-2">User ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Phone No.</th>
              <th className="py-2">Address</th>
            </tr>
          </thead>
          <tbody>
            {users?.pageContent?.map((user) => (
              <tr key={user.userId} className="border-b border-gray-700">
                <td className="py-2">{user.userId}</td>
                <td className="py-2">{user.name}</td>
                <td className="py-2">{user.email}</td>
                <td className="py-2">{user.phone}</td>
                <td className="py-2">{user.address} - {user.pincode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pages pageCount={users?.totalPages} onPageChange={changePage} />

    </div>
  );
};

export default ManageUser;