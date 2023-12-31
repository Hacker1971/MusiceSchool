import React, { useContext } from "react";
import Container from "./navber/Container";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const Logout = () => {
    logOut()
      .then(toast.error("logOut successful"))
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructor">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>{user ? <Link to="/dashboard">DashBoard</Link> : <></>}</li>
      <li>
        {user?.email === "admin@gmail.com" ? (
          <Link to="/admin">Admin</Link>
        ) : (
          <></>
        )}
      </li>
    </>
  );
  return (
    <Container>
      <div className="navbar bg-base-100 shadow-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
            >
              {navOptions}
            </ul>
          </div>

          <Link to="/" className="btn btn-ghost normal-case text-xl w-40 ">
            <img
              src="https://templatekit.tokomoo.com/musicschool/wp-content/uploads/sites/91/2022/08/Logo-Musicine-1.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end z-50">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user?.photoURL ||
                    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  }
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>{user?.displayName}</li>
              <li>
                {user ? (
                  <a onClick={Logout}>Logout</a>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navber;
