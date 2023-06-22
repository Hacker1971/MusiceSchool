import React from "react";
import Container from "../../sheare/navber/Container";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useAuth from "../../../hook/useAuth";
import useManage from "../../../hook/useManage";

const Classes = () => {
  const [cart] = useManage();
  const allClass = useLoaderData();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const addClass = (item) => {
    //new
    if (user && user.email) {
      const cartItem = {
        menuItemId: item._id,
        name: item.className,
        price: item.price,
        email: user.email,
      };
      fetch("http://localhost:5000/card", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Add successful");
          }
          // toast.error('card already exists')
        });
    } else {
      toast.error("Plz login").then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <Container>
      <div className="grid md:grid-cols-3 justify-around gap-10 my-10">
        {allClass?.map((subClass) => (
          <div key={subClass._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={subClass.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">ClassName : {subClass?.className}</h2>
              <h2 className="card-title">
                Instructor Name : {subClass?.instructorName}
              </h2>
              <h2 className="card-title">Seats : {subClass?.availableSet}</h2>
              <h2 className="card-title">Price : {subClass?.price} $</h2>

              <div className="card-actions justify-end">
                {cart?.email ? null : (
                  <button
                    onClick={() => addClass(subClass)}
                    className="btn btn-primary"
                  >
                    Add Now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Classes;
