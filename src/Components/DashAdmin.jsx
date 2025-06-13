import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { getDashboardData } from "../services/bookingService";

const DashAdmin = () => {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    getDashboardData().then((response) => {
      setDashboard(response);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const pieData = {
    labels: ["Approved", "Canceled", "Declined"],
    datasets: [
      {
        data: [dashboard?.confirmedBookings, dashboard?.canceledBookings, dashboard?.declinedBookings],
        backgroundColor: ["#4CAF50", "#E21113", "#FE9900"],
      },
    ],
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 mx-1 my-1  rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card title="Total Users" value={dashboard?.totalUsers} />
        <Card title="Total Owners" value={dashboard?.totalOwners} />
        <Card title="Garage Vault" value={dashboard?.totalRevenue} />
        <Card title="Total Bookings" value={dashboard?.totalBookings} />
      </div>

      
      <div className="grid grid-cols-2  gap-6 mt-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Car Statistics</h3>
          <div className="grid grid-cols-3 gap-4">
            <StatCard title="Total" value={(+dashboard?.activeCars) + (+dashboard?.bookedCars)} />
            <StatCard title="Active" value={dashboard?.activeCars} />
            <StatCard title="Booked" value={dashboard?.bookedCars} />
          </div>
          <div className="mt-9">
            <img src="https://media.assettype.com/thequint%2F2016-06%2F4cac58dd-a63b-4e2b-b69d-c43e296e8389%2Frolls.jpg?auto=format%2Ccompress&fmt=webp&width=720&w=1200" alt="" className="rounded-xl shadow-xl shadow-red-500" />
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Receiving Orders</h3>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, value}) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-md">
    <h4 className="text-lg font-semibold">{title}</h4>
    <p className="text-2xl font-bold mt-2">{value}</p>
    
  </div>
);

const StatCard = ({ title, value }) => (
  <div className="bg-gray-700 p-4 rounded-lg shadow-md text-center">
    <h4 className="text-md font-semibold">{title}</h4>
    <p className="text-xl font-bold mt-2">{value}</p>
  </div>
);

export default DashAdmin;