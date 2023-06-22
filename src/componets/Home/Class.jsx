import React from "react";

const Class = () => {
  return (
    <>
      <div>
        <div className="text-center">
          <h1 className="text-xl text-amber-700 "> OUR PROGRAM</h1>
          <h2 className="py-10 text-5xl font-bold">Grade Programs</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://templatekit.tokomoo.com/musicschool/wp-content/uploads/sites/91/elementor/thumbs/nursery-school-children-with-man-teacher-sitting-o-2022-01-19-00-04-00-utc-ptq40m1tp3ug5hqy96h3m17yfw4t7edx5t9ufb6krk.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Preschool</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://templatekit.tokomoo.com/musicschool/wp-content/uploads/sites/91/elementor/thumbs/adorable-schoolgirl-and-her-music-teacher-playing-2021-12-16-00-26-04-utc-ptq3zo7mv2k4jj43qruj49rd20rlianl15sd5ckqzk.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Schooler</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://templatekit.tokomoo.com/musicschool/wp-content/uploads/sites/91/elementor/thumbs/male-teenage-pupil-playing-drums-in-music-lesson-2022-03-30-20-23-47-utc-ptq40hcmqxo0jfxs0mfyrkengyrz4wv9h60f0xdjmo.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Teenager</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Class;
