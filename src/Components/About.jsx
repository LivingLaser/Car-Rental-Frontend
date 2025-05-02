import React, { useState, useEffect } from "react";

const team = [
  {
    name: "Tiyasha Ghosh",
    role: "QA Tester",
    description: "Tests the app for bugs, ensures smooth user experience (manual + automated testing).",
    image: "/tiyasha.jpg",
  },
  {
    name: "Sayantan Das",
    role: "Backend Developer",
    description: "Builds APIs, server logic (Spring Boot, Node.js, database management)",
    image: "/mota.jpg",
  },
  {
    name: "Sayanika Dey",
    role: "Frontend Developer",
    description: "Designs and builds the user interface (React, Tailwind, MUI).",
    image: "/sdey.jpg",
  },
  {
    name: "Sayantan Das",
    role: "Development Coordinator",
    description: "Manages the workflow, deadlines, and team communication .",
    image: "/roga.jpg",
  },
  {
    name: "Bishwadeep Khanra",
    role: "UI/UX Designer",
    description: "Designs the app’s look and feel (user-friendly screens, prototypes, Figma).",
    image: "/bish.jpg",
  },
];

export default function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % team.length);
    }, 2000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const member = team[index];

  return (
    <div className="relative h-screen  text-white mx-1 my-1 rounded-2xl">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-2xl"
        style={{ backgroundImage: "url('/Aboutus.jpg')" }}
      />

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 ">
        <h1 className="text-4xl font-bold mb-4 -mt-20">About Us</h1>
        <p className="max-w-xl text-lg mb-8">
          We are a passionate team of 5 developers building a modern and reliable car rental platform.
          Our mission is to simplify car rentals with clean UI, seamless booking experiences, and dependable backend support.
        </p>

        {/* Member Card */}
        <div className="flex flex-col items-center bg-black shadow-lg rounded-2xl p-6 max-w-xl mx-auto">
          <img
            src={member.image}
            alt={member.name}
            className="w-40 h-40 rounded-full object-cover mb-4 shadow-md border-4 border-white"
          />
          <h2 className="text-2xl font-semibold">{member.name}</h2>
          <p className="text-gray-300 text-sm">{member.role}</p>
          <p className="mt-2 text-gray-200 text-sm">{member.description}</p>
        </div>
      </div>
    </div>
  );
}
