import React, { useEffect, useState } from "react";
import Pages from "./Pages";
import { getAllOwners } from "../services/userService";

const ManageEmployee = () => {
  const [owners, setOwners] = useState({});

  useEffect(() => {
    getAllOwners(0).then((response) => {
      setOwners(response);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const changePage = (pageNumber) => {
    getAllOwners(pageNumber).then((response) => {
      setOwners(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 mx-1 my-1 rounded-2xl">
      <h1 className="text-3xl font-bold mb-6">Manage Owners</h1>

      {/* Employee List */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Owners List</h2>
        <table className="w-full text-left text-gray-300">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-2">Owner ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Phone No.</th>
              <th className="py-2">Address</th>
            </tr>
          </thead>
          <tbody>
            {owners?.pageContent?.map((owner) => (
              <tr key={owner.userId} className="border-b border-gray-700">
                <td className="py-2">{owner.userId}</td>
                <td className="py-2">{owner.name}</td>
                <td className="py-2">{owner.email}</td>
                <td className="py-2">{owner.phone}</td>
                <td className="py-2">{owner.address} - {owner.pincode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pages pageCount={owners?.totalPages} onPageChange={changePage} />

    </div>
  );
};

export default ManageEmployee;