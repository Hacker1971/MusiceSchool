import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const { error, status } = useRouteError();
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="px-4 lg:py-12">
        <div className="lg:gap-4 lg:flex">
          <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
              <span className="sr-only">Error</span> {status || 404}
            </h2>
            <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page{" "}
              {error.statusText}
            </p>
            <p className="mb-8 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>

            <Link
              to="/"
              className="px-5 py-2 rounded-md text-blue-100 bg-blue-600 hover:bg-blue-700"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
