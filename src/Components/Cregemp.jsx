import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pages from "./Pages";
import { CAR_IMAGE_RESOURCE, getAllCars } from "../services/carService";

const Cregemp = () => {
  const [cars, setCars] = useState({});

  useEffect(() => {
    getAllCars(0).then((response) => {
      setCars(response);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const changePage = (pageNumber) => {
    getAllCars(pageNumber).then((response) => {
      setCars(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-5 mx-2 my-2">
        {cars?.pageContent?.map((car) => (
          <div
            key={car.modelId}
            className="flex p-3 rounded-xl border-4 border-red-700 shadow-md gap-7 bg-stone-900 text-white "
          >

            <img
              src={CAR_IMAGE_RESOURCE + car.modelImage}
              alt={car.modelName}
              className="w-1/3 h-full object-cover rounded-xl"
            />


            <div className="p-4 w-2/3">
              <h3 className="text-lg font-semibold">{car.modelName}</h3>
              <p className="text-white-600 ">{car.fuelType}</p>
              <div className="mt-4">
                <Link
                  to="/reg"
                  state={{ car }} // Pass the car data to the registration page
                >
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Manage Registration
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Pages pageCount={cars?.totalPages} onPageChange={changePage} />
      
    </div>
  );
};

export default Cregemp;