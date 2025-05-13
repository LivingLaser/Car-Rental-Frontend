import React, { useState } from "react";

const ManageEmployee = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", email:"johndoe@Gmail.com", phone:"9090909090", address:"kolkata", status: "Active" },
    { id: 2, name: "Jane Smith", email:"janesmith@Gmail.com", phone:"9090909090", address:"kolkata", status: "Inactive" },
    { id: 3, name: "Alice Johnson", email:"alicejohnson@Gmail.com", phone:"9090909090", address:"kolkata", status: "Active" },
  ]);

  
  const [editEmployee, setEditEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditEmployee = (employee) => {
    setEditEmployee(employee);
    setIsModalOpen(true);
  };

  const handleSaveChanges = () => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.id === editEmployee.id ? editEmployee : emp
      )
    );
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 mx-1 my-1 rounded-2xl">
      <h1 className="text-3xl font-bold mb-6">Manage Owners</h1>

      {/* Employee List */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Owners List</h2>
        <table className="w-full text-left text-gray-300">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Phone No.</th>
              <th className="py-2">Address</th>
              <th className="py-2">Status</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="border-b border-gray-700">
                <td className="py-2">{employee.name}</td>
                <td className="py-2">{employee.email}</td>
                <td className="py-2">{employee.phone}</td>
                <td className="py-2">{employee.address}</td>
                <td
                  className={`py-2 ${
                    employee.status === "Active"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {employee.status}
                </td>
                <td className="py-2">
                  <button
                    onClick={() => handleEditEmployee(employee)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md w-96">
            <h2 className="text-lg font-semibold mb-4">Edit Employee</h2>
            <div className="mb-4">
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                value={editEmployee.name}
                onChange={(e) =>
                  setEditEmployee({ ...editEmployee, name: e.target.value })
                }
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Role</label>
              <input
                type="text"
                value={editEmployee.role}
                onChange={(e) =>
                  setEditEmployee({ ...editEmployee, role: e.target.value })
                }
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Status</label>
              <select
                value={editEmployee.status}
                onChange={(e) =>
                  setEditEmployee({ ...editEmployee, status: e.target.value })
                }
                className="w-full p-2 rounded bg-gray-700 text-white"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChanges}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageEmployee;