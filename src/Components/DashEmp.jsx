import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const DashEmp = () => {
  
  const pieData = {
    labels: ["Accepted", "Cancelled", "Rejected"],
    datasets: [
      {
        data: [3722, 705, 1200],
        backgroundColor: ["#4CAF50", "#E21113", "#FE9900"],
      },
    ],
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 mx-1 my-1 rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Employee Dashboard</h1>

      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card title="Total User" value="50000"  />
        <Card title="Total Registration" value="60000"  />
        <Card title="Garage Vault" value="1000"  />
        <Card title="Total Profit" value="₹1,00,000" />
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Car Statistics</h3>
          <div className="grid grid-cols-3 gap-4">
            <StatCard title="Active" value="174" />
            <StatCard title="On Order" value="39" />
            <StatCard title="Pending" value="12" />
          </div>
          <div className="mt-5">
            <img src="https://thumbs.dreamstime.com/b/abstract-car-speedometer-vector-62348339.jpg" alt="" className="rounded-xl shadow-xl shadow-blue-500" />
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Receiving Orders</h3>
          <Pie data={pieData} />
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="mb-7">
                <img src="https://www.group1mahindra.co.za/blog/wp-content/uploads/futuristic-mahindra-electric-car-blog-image.jpg" alt="" className="rounded-2xl shadow-2xl shadow-slate-300" />
            </div>
          <h3 className="text-lg font-semibold mb-4">User List....</h3>
          <div className="flex items-center justify-center">
            <div className="text-center">
              <table>
                <thead>
                    <tr className="text-left">
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Role</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-left">
                        <td className="px-4 py-2">John Doe</td>
                        <td className="px-4 py-2">Manager</td>
                        <td className="px-4 py-2 text-green-500">Active</td>
                        <td className="px-4 py-2"><button className="bg-blue-500 text-white px-3 py-1 rounded">View</button></td>
                    </tr>
                    <tr className="text-left">
                        <td className="px-4 py-2">Jane Smith</td>
                        <td className="px-4 py-2">Employee</td>
                        <td className="px-4 py-2 text-red-500">Inactive</td>
                        <td className="px-4 py-2"><button className="bg-blue-500 text-white px-3 py-1 rounded">View</button></td>
                    </tr>
                    <tr className="text-left">
                        <td className="px-4 py-2">Alice Johnson</td>
                        <td className="px-4 py-2">Employee</td>
                        <td className="px-4 py-2 text-green-500">Active</td>
                        <td className="px-4 py-2"><button className="bg-blue-500 text-white px-3 py-1 rounded">View</button></td>
                    </tr>
                    </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-gray-800 p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-semibold mb-4">Recent Bookings</h3>
        <table className="w-full text-left text-gray-300">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-2">Name</th>
              <th className="py-2">Car</th>
              <th className="py-2">Date</th>
              <th className="py-2">Price</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <BookingRow
              name="Brooklyn Simmons"
              car="Petrol"
              date="24 Jul 2025"
              price="₹24000"
              status="Completed"
            />
            <BookingRow
              name="Darlene Robertson"
              car="Hybrid"
              date="26 Jul 2025"
              price="₹10400"
              status="On Time"
            />
            <BookingRow
              name="Darlene Robertson"
              car="Electric"
              date="26 Jul 2025"
              price="₹5800"
              status="Cancelled"
            />
          </tbody>
        </table>
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

const BookingRow = ({ name, car, date, price, status }) => (
  <tr className="border-b border-gray-700">
    <td className="py-2">{name}</td>
    <td className="py-2">{car}</td>
    <td className="py-2">{date}</td>
    <td className="py-2">{price}</td>
    <td
      className={`py-2 ${
        status === "Completed"
          ? "text-green-400"
          : status === "On Time"
          ? "text-yellow-400"
          : "text-red-400"
      }`}
    >
      {status}
    </td>
  </tr>
);

export default DashEmp;