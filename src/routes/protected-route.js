import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ children }) => {
  const authUser = localStorage.getItem('USER-TOKEN')
  console.log({ 'User Token': authUser })

  if (!authUser) {
    return <Navigate to={'/login'} />
  }

  return children
}

export default ProtectedRoutes
