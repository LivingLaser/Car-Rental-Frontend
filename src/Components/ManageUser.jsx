import React, { useState } from "react";

const ManageUser = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "johndoe@Gmail.com", phone: "9090909090", address: "Kolkata", },
    { id: 2, name: "Jane Smith", email: "janesmith@Gmail.com", phone: "9090909090", address: "Kolkata", },
    { id: 3, name: "Alice Johnson", email: "alicejohnson@Gmail.com", phone: "9090909090", address: "Kolkata",},
  ]);

  const [editUser, setEditUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditUser = (user) => {
    setEditUser(user);
    setIsModalOpen(true);
  };

  const handleSaveChanges = () => {
    setUsers((prevUsers) =>
      prevUsers.map((u) => (u.id === editUser.id ? editUser : u))
    );
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 mx-1 my-1 rounded-2xl">
      <h1 className="text-3xl font-bold mb-6">Manage Users</h1>

      {/* User List */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Users List</h2>
        <table className="w-full text-left text-gray-300">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Phone No.</th>
              <th className="py-2">Address</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-700">
                <td className="py-2">{user.name}</td>
                <td className="py-2">{user.email}</td>
                <td className="py-2">{user.phone}</td>
                <td className="py-2">{user.address}</td>
                <td className="py-2">
                  <button
                    onClick={() => handleEditUser(user)}
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
            <h2 className="text-lg font-semibold mb-4">Edit User</h2>
            <div className="mb-4">
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                value={editUser.name}
                onChange={(e) =>
                  setEditUser({ ...editUser, name: e.target.value })
                }
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                value={editUser.email}
                onChange={(e) =>
                  setEditUser({ ...editUser, email: e.target.value })
                }
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Phone</label>
              <input
                type="text"
                value={editUser.phone}
                onChange={(e) =>
                  setEditUser({ ...editUser, phone: e.target.value })
                }
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Address</label>
              <input
                type="text"
                value={editUser.address}
                onChange={(e) =>
                  setEditUser({ ...editUser, address: e.target.value })
                }
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
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

export default ManageUser;