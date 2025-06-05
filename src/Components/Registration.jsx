/*import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import TextFeild from '@mui/icons-material/TextFeild';

const Registration = () => {
  const location = useLocation();
  const carData = location.state?.car;

  const [registrations, setRegistrations] = useState([
    { id: 1, regNo: "ABC123", ownerName: "John Doe", ownerPhone: "1234567890", ownerAddress: "123 Main St", insuranceValidity: "2024-01-01", pucValidity: "2024-01-01", modelColor: "Red" },  
    { id: 2, regNo: "XYZ789", ownerName: "Jane Smith", ownerPhone: "0987654321", ownerAddress: "456 Elm St", insuranceValidity: "2024-01-01", pucValidity: "2024-01-01", modelColor: "Blue" },
    { id: 3, regNo: "LMN456", ownerName: "Alice Johnson", ownerPhone: "5555555555", ownerAddress: "789 Oak St", insuranceValidity: "2024-01-01", pucValidity: "2024-01-01", modelColor: "Green" },
    { id: 4, regNo: "DEF321", ownerName: "Bob Brown", ownerPhone: "4444444444", ownerAddress: "101 Pine St", insuranceValidity: "2024-01-01", pucValidity: "2024-01-01", modelColor: "Black" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editRegistration, setEditRegistration] = useState(null);

  const handleRemove = (id) => {
    setRegistrations(registrations.filter((reg) => reg.id !== id));
  };

  const handleEdit = (registration) => {
    setEditRegistration(registration); 
    setIsModalOpen(true);
  };

  const handleSaveChanges = () => {
    setRegistrations((prevRegistrations) =>
      prevRegistrations.map((reg) =>
        reg.id === editRegistration.id ? editRegistration : reg
      )
    );
    setIsModalOpen(false);
  };

  if (!carData) {
    return <div className="text-center mt-10">No car data available.</div>;
  }

  return (
    <div className="p-6 justify-center items-center gap-40  min-h-screen rounded-lg mx-1 my-1">
      
      <div className="text-center mb-8">
        <img
          src={carData.image}
          alt={carData.name}
          className="w-full max-w-md mx-auto rounded-lg"
        />
        <h2 className="text-2xl font-bold mt-4">{`Car Model: ${carData.name}`}</h2>
        <p className="text-black font-semibold">{`Details: ${carData.details}`}</p>

        
        
      </div>

      
      

      
      <div className="overflow-x-auto min-h-screen p-5">
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
                <td className="border border-gray-300 px-4 py-2">{reg.ownerName}</td>
                <td className="border border-gray-300 px-4 py-2">{reg.ownerPhone}</td>
                <td className="border border-gray-300 px-4 py-2">{reg.ownerAddress}</td>
                <td className="border border-gray-300 px-4 py-2">{reg.insuranceValidity}</td>
                <td className="border border-gray-300 px-4 py-2">{reg.pucValidity}</td>
                <td className="border border-gray-300 px-4 py-2">{reg.modelColor}</td>
                <td className="border border-gray-300 flex px-4 py-2 gap-3 justify-center">
                  <button
                    onClick={() => handleEdit(reg)} 
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
          <div className="bg-slate-300 p-6 rounded-lg shadow-md w-3/4">
            <h2 className="text-lg font-semibold mb-4">Edit Registration</h2>
            
            
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

export default Registration;
*/
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";

const Registration = () => {
  const location = useLocation();
  const carData = location.state?.car;

  const [registrations, setRegistrations] = useState([
    { id: 1, regNo: "ABC123", ownerName: "John Doe", ownerPhone: "1234567890", ownerAddress: "123 Main St", insuranceValidity: "2024-01-01", pucValidity: "2024-01-01", modelColor: "Red" },  
    { id: 2, regNo: "XYZ789", ownerName: "Jane Smith", ownerPhone: "0987654321", ownerAddress: "456 Elm St", insuranceValidity: "2024-01-01", pucValidity: "2024-01-01", modelColor: "Blue" },
    { id: 3, regNo: "LMN456", ownerName: "Alice Johnson", ownerPhone: "5555555555", ownerAddress: "789 Oak St", insuranceValidity: "2024-01-01", pucValidity: "2024-01-01", modelColor: "Green" },
    { id: 4, regNo: "DEF321", ownerName: "Bob Brown", ownerPhone: "4444444444", ownerAddress: "101 Pine St", insuranceValidity: "2024-01-01", pucValidity: "2024-01-01", modelColor: "Black" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editRegistration, setEditRegistration] = useState(null);

  const handleRemove = (id) => {
    setRegistrations(registrations.filter((reg) => reg.id !== id));
  };

  const handleEdit = (registration) => {
    setEditRegistration(registration); 
    setIsModalOpen(true);
  };

  const handleSaveChanges = () => {
    setRegistrations((prevRegistrations) =>
      prevRegistrations.map((reg) =>
        reg.id === editRegistration.id ? editRegistration : reg
      )
    );
    setIsModalOpen(false);
  };

  if (!carData) {
    return <div className="text-center mt-10">No car data available.</div>;
  }

  return (
    <div className="p-6 justify-center items-center gap-40  min-h-screen rounded-lg mx-1 my-1">
      <div className="text-center mb-8">
        <img
          src={carData.image}
          alt={carData.name}
          className="w-full max-w-md mx-auto rounded-lg"
        />
        <h2 className="text-2xl font-bold mt-4">{`Car Model: ${carData.name}`}</h2>
        <p className="text-black font-semibold">{`Details: ${carData.details}`}</p>
      </div>

      <div className="overflow-x-auto min-h-screen p-5">
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
                <td className="border border-gray-300 px-4 py-2">{reg.ownerName}</td>
                <td className="border border-gray-300 px-4 py-2">{reg.ownerPhone}</td>
                <td className="border border-gray-300 px-4 py-2">{reg.ownerAddress}</td>
                <td className="border border-gray-300 px-4 py-2">{reg.insuranceValidity}</td>
                <td className="border border-gray-300 px-4 py-2">{reg.pucValidity}</td>
                <td className="border border-gray-300 px-4 py-2">{reg.modelColor}</td>
                <td className="border border-gray-300 flex px-4 py-2 gap-3 justify-center">
                  <button
                    onClick={() => handleEdit(reg)} 
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
          <div className="bg-slate-300 p-6 rounded-lg shadow-md w-3/4">
            <h2 className="text-lg font-semibold mb-4">Edit Registration</h2>

            <div className="mb-4"> {/* [CHANGED] */}
              <TextField
                label="Registration No."
                value={editRegistration.regNo}
                onChange={(e) =>
                  setEditRegistration({ ...editRegistration, regNo: e.target.value })
                }
                fullWidth
                variant="outlined"
                size="small"
              />
            </div>

            <div className="mb-4"> {/* [CHANGED] */}
              <TextField
                label="Owner Name"
                value={editRegistration.ownerName}
                onChange={(e) =>
                  setEditRegistration({ ...editRegistration, ownerName: e.target.value })
                }
                fullWidth
                variant="outlined"
                size="small"
              />
            </div>

            <div className="mb-4"> {/* [CHANGED] */}
              <TextField
                label="Owner Phone"
                value={editRegistration.ownerPhone}
                onChange={(e) =>
                  setEditRegistration({ ...editRegistration, ownerPhone: e.target.value })
                }
                fullWidth
                variant="outlined"
                size="small"
              />
            </div>

            <div className="mb-4"> {/* [CHANGED] */}
              <TextField
                label="Owner Address"
                value={editRegistration.ownerAddress}
                onChange={(e) =>
                  setEditRegistration({ ...editRegistration, ownerAddress: e.target.value })
                }
                fullWidth
                variant="outlined"
                size="small"
              />
            </div>

            <div className="mb-4"> {/* [CHANGED] */}
              <TextField
                label="Insurance Validity"
                type="date"
                value={editRegistration.insuranceValidity}
                onChange={(e) =>
                  setEditRegistration({ ...editRegistration, insuranceValidity: e.target.value })
                }
                fullWidth
                variant="outlined"
                size="small"
                InputLabelProps={{ shrink: true }}
              />
            </div>

            <div className="mb-4"> {/* [CHANGED] */}
              <TextField
                label="PUC Validity"
                type="date"
                value={editRegistration.pucValidity}
                onChange={(e) =>
                  setEditRegistration({ ...editRegistration, pucValidity: e.target.value })
                }
                fullWidth
                variant="outlined"
                size="small"
                InputLabelProps={{ shrink: true }}
              />
            </div>

            <div className="mb-4"> {/* [CHANGED] */}
              <TextField
                label="Model Color"
                value={editRegistration.modelColor}
                onChange={(e) =>
                  setEditRegistration({ ...editRegistration, modelColor: e.target.value })
                }
                fullWidth
                variant="outlined"
                size="small"
                error={errors?.response?.data?.modelColor ? true : false}
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

export default Registration;
