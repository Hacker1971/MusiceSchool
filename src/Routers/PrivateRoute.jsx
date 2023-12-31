/* eslint-disable react/prop-types */
import {React, useContext } from 'react'



import { Navigate, useLocation } from 'react-router-dom'
import Loader from '../componets/sheare/Loder'
import { AuthContext } from '../provider/AuthProvider'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return <Loader></Loader>
  }

  if (user) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default PrivateRoute