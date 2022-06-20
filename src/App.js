import React from 'react'
import HeaderComponent from './components/header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/login'
import ResetPassword from './components/reset-password'
import ForgetPassword from './components/forgot-password'
import Settings from './components/settings'
import Salaries from './components/salaries'
import TimeSheets from './components/time-sheets'
import Statistics from './components/statistics'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="" element={<HeaderComponent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/Forgot-password" element={<ForgetPassword />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/salaries" element={<Salaries />} />
          <Route path="/Timesheets" element={<TimeSheets />} />
          <Route path="/Statistics" element={<Statistics />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
