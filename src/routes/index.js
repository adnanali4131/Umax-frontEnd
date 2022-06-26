import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../components/login'
import ResetPassword from '../components/reset-password'
import ForgetPassword from '../components/forgot-password'
import Settings from '../components/settings'
import Salaries from '../components/salaries'
import TimeSheets from '../components/time-sheets'
import Statistics from '../components/statistics'
import ProtectedRoutes from '../routes/protected-route'

function Urls() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/Forgot-password" element={<ForgetPassword />} />

        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Statistics />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoutes>
              <Settings />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/salaries"
          element={
            <ProtectedRoutes>
              <Salaries />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/Timesheets"
          element={
            <ProtectedRoutes>
              <TimeSheets />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </Router>
  )
}
export default Urls
