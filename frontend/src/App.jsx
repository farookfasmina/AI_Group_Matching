import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { loginAs } from "./utils/auth";

export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Demo login buttons */}
      <Route
        path="/"
        element={
          <div className="min-h-screen flex items-center justify-center gap-4">
            <button
              className="px-6 py-3 bg-indigo-600 text-white rounded"
              onClick={() => {
                loginAs("student");
                window.location.href = "/dashboard";
              }}
            >
              Login as Student
            </button>

            <button
              className="px-6 py-3 bg-red-600 text-white rounded"
              onClick={() => {
                loginAs("admin");
                window.location.href = "/dashboard";
              }}
            >
              Login as Admin
            </button>
          </div>
        }
      />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute allowedRoles={["student", "admin"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Admin only */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <div className="p-10 text-2xl">Admin Panel</div>
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
