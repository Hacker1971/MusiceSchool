import React from "react";

const ABOUT = () => {
  return (
    <>
      <div className="flex flex-col w-full lg:flex-row my-28">
        <div className="grid flex-grow h-full card bg-base-300 rounded-box ">
          <h1 className="p-3 text-orange-400 text-lg font-semibold">
            ABOUT US
          </h1>
          <h2 className="p-3 font-bold text-5xl">
            We Help You to
            <br /> Grow Faster and <br /> Better
          </h2>
          <img
            className=" w-[500px] h-[300px] rounded-2xl p-3"
            src="https://templatekit.tokomoo.com/musicschool/wp-content/uploads/sites/91/2022/08/little-girl-in-eyeglasses-learning-to-play-guitar-2022-04-29-00-27-38-utc-800x534.jpg"
            alt=""
          />
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow h-full card bg-base-300 rounded-box p-5">
          <h1 className="py-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut
            <br /> labore et dolore magna aliqua. Ut enim ad minim veniam,
            <br /> quis nostrud exercitation ullamco labori.
          </h1>
          <ul className="py-5 ">
            <li> 1. Quality services and support all time</li>
            <li> 2. Expert team member</li>
            <li> 3. Lifetime online support</li>
          </ul>
          <div className="py-4">
          <button className="btn bg-amber-700 text-white  py-3">
            MORE ABOUT US
          </button>
          </div>
          <div className="md:flex gap-8 justify-around py-8">
            <div>
              <h1 className="text-amber-700 text-7xl text-center font-bold">
                250+
              </h1>
              <h2 className="text-2xl text-center">Project Done</h2>
            </div>
            <div>
              <h1 className="text-amber-700 text-7xl text-center font-bold">
                640+
              </h1>
              <h2 className="text-2xl text-center">Satisfied Client</h2>
            </div>
            <div>
              <h1 className="text-amber-700 text-7xl text-center font-bold">
                800+
              </h1>
              <h2 className="text-2xl text-center">User Active</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ABOUT;
