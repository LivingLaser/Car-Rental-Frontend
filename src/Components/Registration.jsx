import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CAR_IMAGE_RESOURCE } from "../services/carService";
import { getVariantsByModel, removeCarVariant } from "../services/carVariantService";
import { toast } from "react-toastify";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoSpeedometer } from "react-icons/io5";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { BsSuitcase } from "react-icons/bs";


const Registration = () => {
  const location = useLocation();
  const car = location.state?.car;
  const [variants, setVariants] = useState(null);

  useEffect(() => {
    getVariantsByModel(car.modelId).then((response) => {
      setVariants(response);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const deleteVariant = (registration) => {
    removeCarVariant(registration).then((response) => {
      toast.success(response.message);
      const newVariants = variants.filter((variant) => variant.registration != registration);
      setVariants([...newVariants]);
    }).catch((error) => {
      console.log(error);
    });
  }

  if (!car) {
    return <div className="text-center mt-10">No car data available.</div>;
  }

  return (
    <div className="p-6 justify-center items-center gap-40  min-h-screen rounded-lg mx-1 my-1">
      
      <div className="text-center mb-8">
        <img
          src={CAR_IMAGE_RESOURCE + car.modelImage}
          alt={car.modelName}
          className="w-full max-w-md mx-auto rounded-lg"
        />
        <h2 className="text-2xl font-bold mt-4">{`Car Model : ${car.modelName}`}</h2>


        <div className="flex justify-around gap-4 mb-6 mt-4 items-center">
                  <div className="flex items-center p-1">
                    <BsFillFuelPumpFill className="text-2xl text-blue-500 mr-2" />
                    <p className="text-black font-semibold">Fuel: {car.fuelType}</p>
                  </div>
                  <div className="flex items-center p-1">
                    <IoSpeedometer className="text-2xl text-blue-500 mr-2" />
                    <p className="text-black font-semibold">Mileage: {car.mileage}</p>
                  </div>
                  <div className="flex items-center p-1">
                    <MdOutlineAirlineSeatReclineExtra className="text-2xl text-blue-500 mr-2" />
                    <p className="text-black font-semibold">Seat Capacity: {car.seatCapacity}</p>
                  </div>
                  <div className="flex items-center p-1">
                    <BsSuitcase className="text-2xl text-blue-500 mr-2" />
                    <p className="text-black font-semibold">Boot Space: {car.bootSpace}</p>
                  </div>
                </div>

      </div>

      <div className="overflow-x-auto min-h-screen p-5 ">
        <table className="table-auto w-full my-0 border-collapse border border-gray-300 overflow-scroll rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Registration</th>
              <th className="border border-gray-300 px-4 py-2">Owner Name</th>
              <th className="border border-gray-300 px-4 py-2">Owner Email</th>
              <th className="border border-gray-300 px-4 py-2">Owner Phone</th>
              <th className="border border-gray-300 px-4 py-2">Insurance Validity</th>
              <th className="border border-gray-300 px-4 py-2">PUC Validity</th>
              <th className="border border-gray-300 px-4 py-2">Model Color</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {variants?.map((variant) => (
              <tr key={variant.registration} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{variant.registration}</td>
                <td className="border border-gray-300 px-4 py-2">{variant.user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{variant.user.email}</td>
                <td className="border border-gray-300 px-4 py-2">{variant.user.phone}</td>
                <td className="border border-gray-300 px-4 py-2">{new Date(variant.insuranceValidity).toLocaleDateString}</td>
                <td className="border border-gray-300 px-4 py-2">{new Date(variant.pucValidity).toLocaleDateString}</td>
                <td className="border border-gray-300 px-4 py-2">{variant.modelColor}</td>
                <td className="border border-gray-300 flex px-4 py-2 gap-3 justify-center">
                  <button
                    onClick={() => deleteVariant(variant.registration)}
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
    </div>
  );
};

export default Registration;
