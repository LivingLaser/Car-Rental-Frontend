import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cregemp = () => {
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
    {
      id: 7,
      name: "Car7",
      details: "Hybrid, 2019 Model, 25 miles range",
      image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnRzJTIwY2FyfGVufDB8fDB8fHww",
    },
    {
      id: 8,
      name: "Car8",
      details: "Gasoline, 2018 Model, 10 miles range",
      image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnRzJTIwY2FyfGVufDB8fDB8fHww",
    },
    {
      id: 9,
      name: "Car9",
      details: "Diesel, 2017 Model, 5 miles range",
      image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnRzJTIwY2FyfGVufDB8fDB8fHww",
    },
    {
      id: 10,
      name: "Car10",
      details: "Petrol, 2016 Model, 2 miles range",
      image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnRzJTIwY2FyfGVufDB8fDB8fHww",
    },
    {
      id: 11,
      name: "Car11",
      details: "Electric, 2015 Model, 1 miles range",
      image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnRzJTIwY2FyfGVufDB8fDB8fHww",
    },
    {
      id: 12,
      name: "Car12",
      details: "Hybrid, 2014 Model, 0 miles range",
      image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnRzJTIwY2FyfGVufDB8fDB8fHww",
    },
  ]);

  return (
    <div className="grid grid-cols-2 gap-5 mx-2 my-2">
      {cars.map((car) => (
        <div
          key={car.id}
          className="flex p-3 rounded-xl border-4 border-red-700 shadow-md gap-7 bg-stone-900 text-white "
        >
          
          <img
            src={car.image}
            alt={car.name}
            className="w-1/3 h-full object-cover rounded-xl"
          />

          
          <div className="p-4 w-2/3">
            <h3 className="text-lg font-semibold">{car.name}</h3>
            <p className="text-white-600 ">{car.details}</p>
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
  );
};

export default Cregemp;