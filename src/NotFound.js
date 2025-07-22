import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font h-screen flex flex-col justify-center items-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-600 mb-4">
          404
        </h1>
        <p className="text-lg mb-6">
          We couldn’t find that page... maybe you flew off course. ✈️
        </p>
        <Link
          to="/"
          className="text-white bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-4 rounded transition"
        >
          Return to Home Airport
        </Link>
      </div>
    </section>
  );
}
