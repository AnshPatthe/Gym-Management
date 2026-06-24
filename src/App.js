import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';

// Dashboard Pages
import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/dashboard/Overview';
import Members from './pages/dashboard/Members';
import Trainers from './pages/dashboard/Trainers';
import Settings from './pages/dashboard/Settings';

// Placeholders for remaining pages
const Placeholder = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center bg-gym-black text-white">
    <h1 className="text-3xl font-bold">{title}</h1>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="members" element={<Members />} />
          <Route path="trainers" element={<Trainers />} />
          <Route path="attendance" element={<Placeholder title="Attendance" />} />
          <Route path="workout-plans" element={<Placeholder title="Workout Plans" />} />
          <Route path="diet-plans" element={<Placeholder title="Diet Plans" />} />
          <Route path="payments" element={<Placeholder title="Payments" />} />
          <Route path="reports" element={<Placeholder title="Reports" />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
