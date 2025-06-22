import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { HabitProvider } from './HabitContext';

import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer'; // ✅ Import Footer

import HomePage from './Pages/HomePage';
import CookingPage from './Pages/CookingPage';
import ExercisingPage from './Pages/ExercisingPage';
import PrayingPage from './Pages/PrayingPage';
import MeditationPage from './Pages/MeditationPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import HabitTemplate from './Pages/HabitTemplate';
import ContactPage from './Pages/ContactPage';
import AdminPage from './Pages/AdminPage';
import UserPage from './Pages/UserPage';
import AddHabitPage from './Pages/AddHabitPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function App() {
  return (
    <Router>
      <AuthProvider>
        <HabitProvider>
          <div className="app-wrapper"> {/* Optional: useful for full height layout */}
            <Header />

            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />

              {/* Protected Routes */}
              <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
              <Route path="/contacts" element={<ProtectedRoute><ContactPage /></ProtectedRoute>} />
              <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
              <Route path="/user" element={<ProtectedRoute><UserPage /></ProtectedRoute>} />

              {/* Default Habit Pages */}
              <Route path="/cooking" element={<ProtectedRoute><CookingPage /></ProtectedRoute>} />
              <Route path="/exercising" element={<ProtectedRoute><ExercisingPage /></ProtectedRoute>} />
              <Route path="/praying" element={<ProtectedRoute><PrayingPage /></ProtectedRoute>} />
              <Route path="/meditation" element={<ProtectedRoute><MeditationPage /></ProtectedRoute>} />

              {/* Add New Habit */}
              <Route path="/add" element={<ProtectedRoute><AddHabitPage /></ProtectedRoute>} />

              {/* Fallback for dynamic custom habit pages */}
              <Route path="/*" element={<ProtectedRoute><HabitTemplate /></ProtectedRoute>} />
            </Routes>

            <Footer /> {/* ✅ Footer appears on all pages */}
          </div>
        </HabitProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
