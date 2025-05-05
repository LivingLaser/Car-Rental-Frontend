import React, { useState } from "react";

const ManageCar = () => {
  const [cars, setCars] = useState([
    {
      id: 1,
      name: "Car1",
      details: "Electric, 2025 Model, 400 miles range",
      image: "https://douradocars.com/wp-content/uploads/2024/04/Lamborghini-Urus-Novitec-Green-1-1024x699.webp",
    },
    {
      id: 2,
      name: "Car2",
      details: "Hybrid, 2024 Model, 300 miles range",
      image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnRzJTIwY2FyfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Car3",
      details: "Gasoline, 2023 Model, 200 miles range",
      image: "https://imageio.forbes.com/specials-images/imageserve/6064c6802c761b99a89d1f21/0x0.jpg?format=jpg&crop=2375,1336,x0,y120,safe&height=900&width=1600&fit=bounds",
    },
    {
      id: 4,
      name: "Car4",
      details: "Diesel, 2022 Model, 150 miles range",
      image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnRzJTIwY2FyfGVufDB8fDB8fHww",
    },
    {
      id: 5,
      name: "Car5",
      details: "Petrol, 2021 Model, 100 miles range",
      image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnRzJTIwY2FyfGVufDB8fDB8fHww",
    },
    {
      id: 6,
      name: "Car6",
      details: "Electric, 2020 Model, 50 miles range",
      image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnRzJTIwY2FyfGVufDB8fDB8fHww",
    },
    
  ]);

  const [selectedCar, setSelectedCar] = useState(null);

  const openModal = (car) => {
    setSelectedCar(car);
  };

  const closeModal = () => {
    setSelectedCar(null);
  };

  return (
    <div className="grid grid-cols-2 gap-5 mx-2 my-2">
      {cars.map((car) => (
        <div
          key={car.id}
          className="flex border-4 border-blue-900 p-4 rounded-xl shadow-md gap-7 bg-slate-950 text-white"
        >
          
          <img
            src={car.image}
            alt={car.name}
            className="w-1/3 h-full object-cover rounded-xl"
          />

          
          <div className="p-4 w-2/3">
            <h3 className="text-lg font-semibold">{car.name}</h3>
            <p className="text-white-600">{car.details}</p>
            <div className="mt-4">
              <button
                onClick={() => openModal(car)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}

      
      {selectedCar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-2xl font-bold mb-4">{selectedCar.name}</h2>
            <p className="text-gray-600 mb-4">{selectedCar.details}</p>
            <img
              src={selectedCar.image}
              alt={selectedCar.name}
              className="w-full h-auto rounded-lg mb-4"
            />
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCar;