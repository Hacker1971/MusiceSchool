import React from "react";

const Instructor = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-amber-700 py-10 text-xl font-semibold">
          OUR TEACHERS
        </h1>
        <h2 className="text-5xl py-10 font-bold">Meet Our Instructor</h2>
      </div>
      <div className="grid md:grid-cols-4 justify-around py-24 gap-10">
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://templatekit.tokomoo.com/musicschool/wp-content/uploads/sites/91/elementor/thumbs/happy-young-man-in-eyeglasses-and-casualwear-sitti-2021-12-16-00-28-51-utc-ptq40arnibjnau61ycblvsppns0n3zczwkayedhjgm.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Alfredo Torres</h2>
            <p>Piano Instructor</p>
            
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://templatekit.tokomoo.com/musicschool/wp-content/uploads/sites/91/elementor/thumbs/happy-young-teacher-of-music-with-guitar-sitting-i-2021-10-27-21-38-47-utc-ptq40cnbvzm7y23bnd4v0s8mujrdjdkgktlxcxer46.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Rufus Stewart</h2>
            <p>Guitar Instructor</p>
            
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://templatekit.tokomoo.com/musicschool/wp-content/uploads/sites/91/elementor/thumbs/portrait-of-muslim-girl-in-hijab-playing-piano-2022-07-06-17-53-04-utc-ptq40pt2jo48glk7iitmzox35xyij50pamqq2sv8p2.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Hannah Morales</h2>
            <p>Violin Instructor</p>
            
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure>
            <img 
              src="https://templatekit.tokomoo.com/musicschool/wp-content/uploads/sites/91/elementor/thumbs/a-music-teacher-conducts-a-lesson-on-playing-a-mus-2022-07-06-17-54-29-utc-ptq3zo7iyaork72tm2kk7yenej3tz8vftgnavqezly.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Juliana Silva</h2>
            <p>Flute Instructor</p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructor;
