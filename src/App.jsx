import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { HabitProvider } from './HabitContext';

import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';

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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <Router>
      <AuthProvider>
        <HabitProvider>
          <div className="app-wrapper">
            <Header />

            <Routes>
              {/* ✅ Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/contacts" element={<ContactPage />} />

              {/* 🔐 Protected Routes */}
              <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
              <Route path="/user" element={<ProtectedRoute><UserPage /></ProtectedRoute>} />
              <Route path="/cooking" element={<ProtectedRoute><CookingPage /></ProtectedRoute>} />
              <Route path="/exercising" element={<ProtectedRoute><ExercisingPage /></ProtectedRoute>} />
              <Route path="/praying" element={<ProtectedRoute><PrayingPage /></ProtectedRoute>} />
              <Route path="/meditation" element={<ProtectedRoute><MeditationPage /></ProtectedRoute>} />
              <Route path="/add" element={<ProtectedRoute><AddHabitPage /></ProtectedRoute>} />
              <Route path="/*" element={<ProtectedRoute><HabitTemplate /></ProtectedRoute>} />
            </Routes>

            <Footer />
          </div>
        </HabitProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
