import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import VerifyCode from './components/VerifyCode';
import NewPassword from './components/NewPassword';
import Home from './components/Home';
import Contact from './components/Contact';
import Solutions from './components/Solutions';
import Hesaplama from './components/Hesaplama';
import SKDM from './components/SKDM';
import Blog from './components/Blog';
import Demo from './components/Demo';

// Protected Route Wrapper
const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// ... imports ...

// ... imports ...

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem('token');
  });

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white flex flex-col font-sans">

          {/* Navbar with Auth Props */}
          <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />

          {/* Main Content Area */}
          <main className="grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/hesaplama" element={<Hesaplama />} />
              <Route path="/skdm" element={<SKDM />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/demo" element={<Demo />} />

              {/* Auth Routes */}
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/signup" element={<Signup onLogin={handleLogin} />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/verify-code" element={<VerifyCode />} />
              <Route path="/new-password" element={<NewPassword />} />

              {/* Protected Routes */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Dashboard onLogout={handleLogout} />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>

          {/* Footer always stays at the bottom */}
          <Footer />

        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;