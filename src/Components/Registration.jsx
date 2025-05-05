import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Registration = () => {
  const location = useLocation();
  const carData = location.state?.car;

  const [registrations, setRegistrations] = useState([
    { id: 1, regNo: "ABC123", status: "Active" },
    { id: 2, regNo: "XYZ789", status: "Inactive" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRegNo, setNewRegNo] = useState("");
  const [newStatus, setNewStatus] = useState("Pending");

  const handleRemove = (id) => {
    setRegistrations(registrations.filter((reg) => reg.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Edit registration with ID: ${id}`);
  };

  const handleAddRegistration = () => {
    const newReg = {
      id: registrations.length + 1,
      regNo: newRegNo,
      status: newStatus,
    };
    setRegistrations([...registrations, newReg]);
    setIsModalOpen(false); 
    setNewRegNo(""); // Reset input fields
    setNewStatus("Pending");
  };

  if (!carData) {
    return <div className="text-center mt-10">No car data available.</div>;
  }

  return (
    <div className="p-6 flex flex-row justify-center items-center gap-40  min-h-screen rounded-lg mx-1 my-1">
      
      <div className="text-center mb-8">
        <img
          src={carData.image}
          alt={carData.name}
          className="w-full max-w-md mx-auto rounded-lg"
        />
        <h2 className="text-2xl font-bold mt-4">{`Car Model: ${carData.name}`}</h2>
        <p className="text-gray-600">{`Details: ${carData.details}`}</p>

        
        <div className="text-center mb-8">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white my-2 px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Registration
        </button>
        </div>
      </div>

      
      

      
      <div className="overflow-x-auto min-h-screen">
        <table className="table-auto w-full my-0 border-collapse border border-gray-300 overflow-scroll">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Registration No.</th>
              <th className="border border-gray-300 px-4 py-2">Owner Name</th>
              <th className="border border-gray-300 px-4 py-2">Owner Phone</th>
              <th className="border border-gray-300 px-4 py-2">Owner Address</th>
              <th className="border border-gray-300 px-4 py-2">Insurance Validity</th>
              <th className="border border-gray-300 px-4 py-2">PUC Validity</th>
              <th className="border border-gray-300 px-4 py-2">Model Color</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
              
            </tr>
          </thead>
          <tbody>
            {registrations.map((reg) => (
              <tr key={reg.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{reg.regNo}</td>
                <td className="border border-gray-300 px-4 py-2">{reg.status}</td>
                <td className="border border-gray-300 px-4 py-2">{reg.status}</td>
                <td className="border border-gray-300 px-4 py-2">{reg.status}</td>
                <td className="border border-gray-300 px-4 py-2">{reg.status}</td>
                <td className="border border-gray-300 px-4 py-2">{reg.status}</td>
                <td className="border border-gray-300 px-4 py-2">{reg.status}</td>
                <td className="border border-gray-300 flex px-4 py-2">
                  <button
                    onClick={() => handleEdit(reg.id)}
                    className="bg-yellow-500 text-white px-4 py-1 rounded-lg mr-2 hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleRemove(reg.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add New Registration</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Registration No.</label>
              <input
                type="text"
                value={newRegNo}
                onChange={(e) => setNewRegNo(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Status</label>
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
              >
                <option value="Pending">Pending</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleAddRegistration}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;