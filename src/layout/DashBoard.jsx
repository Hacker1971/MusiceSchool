import React, { useEffect, useState } from "react";
import Container from "../componets/sheare/navber/Container";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../hook/useAuth";


const DashBoard = () => {
  const {user} = useAuth();
  const [inst ,setinst] = useState()
  useEffect(()=>{
    fetch(`http://localhost:5000/users/instructor/${user?.email}`)
    .then(res=> res.json())
    .then(data => setinst(data))
  },[])
  console.log(inst);
  // const isAdmin =false;
  return (
    <Container>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {inst?.instructor? (
              <>
              <h1 className="text-center text-2xl font-bold">Instructor </h1>
                <li>
                  <Link to='dashboard/MyClass'>My class</Link>
                </li>
                <li>
                  <Link to='dashboard/AddClass'>Add class</Link>
                </li>
              </>
            ) : (
              <>
              <h1 className="text-center text-2xl font-bold">Student </h1>
                <li>
                  <Link to='dashboard/selectedClass'>My Selected Class</Link>
                </li>
                <li>
                  
                </li>
                <li>
                  <Link to='dashboard/enrolledClass'>My Enrolled Class</Link>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <Link to='/'>Home</Link>
             </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default DashBoard;
