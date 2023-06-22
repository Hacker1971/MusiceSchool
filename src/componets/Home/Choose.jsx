import React from "react";
import { FaBuilding, FaUsers } from "react-icons/fa";

const Choose = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse  gap-24">
          <img
            src="https://templatekit.tokomoo.com/musicschool/wp-content/uploads/sites/91/2022/08/boy-at-music-school-learning-to-play-drums-2021-09-24-04-29-43-utc-683x1024.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-amber-700 text-lg py-10">WHY CHOOSE US</h1>
            <h2 className="text-7xl font-semibold">Why You Should <br/> Choose Us</h2>
            <p className="py-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit <br/>
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div>
              <div className="flex">
                <div className="text-amber-700 py-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="2em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M465 7c-9.4-9.4-24.6-9.4-33.9 0L383 55c-2.4 2.4-4.3 5.3-5.5 8.5l-15.4 41-77.5 77.6c-45.1-29.4-99.3-30.2-131 1.6c-11 11-18 24.6-21.4 39.6c-3.7 16.6-19.1 30.7-36.1 31.6c-25.6 1.3-49.3 10.7-67.3 28.6C-16 328.4-7.6 409.4 47.5 464.5s136.1 63.5 180.9 18.7c17.9-17.9 27.4-41.7 28.6-67.3c.9-17 15-32.3 31.6-36.1c15-3.4 28.6-10.5 39.6-21.4c31.8-31.8 31-85.9 1.6-131l77.6-77.6 41-15.4c3.2-1.2 6.1-3.1 8.5-5.5l48-48c9.4-9.4 9.4-24.6 0-33.9L465 7zM208 256a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                </div>
                <div>
                  <h1 className="font-bold text-3xl py-5">Free Equipment</h1>
                  <h2 className="py-5 text-slate-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h2>
                </div>
              </div>
              <div className="flex">
                <div className="text-amber-700 py-5">
                  <FaBuilding></FaBuilding>{" "}
                </div>
                <div>
                  <h1 className="font-bold text-3xl py-5">Music Studio</h1>
                  <h2 className="py-5 text-slate-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h2>
                </div>
              </div>
              <div className="flex">
                <div className="text-amber-700 py-5 h-10">
                  <FaUsers></FaUsers>{" "}
                </div>
                <div>
                  <h1 className="font-bold text-3xl py-5">Expert Teacher</h1>
                  <h2 className="py-5 text-slate-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
