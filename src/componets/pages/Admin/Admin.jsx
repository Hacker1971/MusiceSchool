import React from "react";
import Container from "../../sheare/navber/Container";
import {  Link, Outlet } from "react-router-dom";

const Admin = () => {
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
          <li><Link to='/admin/manageUser'>ManageUser</Link></li>

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

export default Admin;
