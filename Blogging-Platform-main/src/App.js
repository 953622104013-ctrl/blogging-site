import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthProvider from "./context/authcontext";

import Login from "./pages/Login";
import Home from "./pages/Home";
import CreatePost from "./pages/Createpost";
import ForgotPassword from "./pages/ForgotPassword";   // ✅ add
import ResetPassword from "./pages/ResetPassword";     // ✅ add

// 🔐 Protected Route
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/auth" />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* 🌐 Public Routes */}
          <Route path="/auth" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> {/* ✅ */}
          <Route path="/reset-password/:token" element={<ResetPassword />} /> {/* ✅ */}

          {/* 🔐 Protected Routes */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          <Route
            path="/create"
            element={
              <PrivateRoute>
                <CreatePost />
              </PrivateRoute>
            }
          />

          {/* ❌ 404 */}
          <Route path="*" element={<h2>404 Page Not Found</h2>} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;