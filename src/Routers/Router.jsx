/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../componets/Home/Home";
import Error from "../componets/Error";
import Instructor from "../componets/Home/Instructor";
import Classes from "../componets/pages/class/Classes";
import Login from "../componets/sheare/login/Login";
import Registration from "../componets/sheare/registration/Registration";
import DashBoard from "../layout/DashBoard";
import SelectedClass from "../componets/DashBoardPage/Student/SelectedClass";
import EnrolledClass from "../componets/DashBoardPage/Student/EnrolledClass";
import MyClass from "../componets/DashBoardPage/teacher/MyClass";
import AddClass from "../componets/DashBoardPage/teacher/AddClass";
import PrivateRoute from "./PrivateRoute";
import Admin from "../componets/pages/Admin/Admin";
import ManageUser from "../componets/pages/Admin/ManageUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructor",
        element: <Instructor></Instructor>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
        loader: () => fetch("http://localhost:5000/class"),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "dashboard/selectedClass",
        element: <SelectedClass></SelectedClass>,
      },
      {
        path: "dashboard/enrolledClass",
        element: <EnrolledClass></EnrolledClass>,
      },
      {
        path: "dashboard/MyClass",
        element: <MyClass></MyClass>,
      },
      {
        path: "dashboard/AddClass",
        element: <AddClass></AddClass>,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin></Admin>,
    children : [
      {
        path: "/admin/manageUser",
        element : <ManageUser></ManageUser>
      }
    ]
  },
]);
