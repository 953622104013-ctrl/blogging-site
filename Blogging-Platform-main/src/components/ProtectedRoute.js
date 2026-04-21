import { useContext } from "react";
import { AuthContext } from "../context/authcontext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <h3>Loading...</h3>;

  if (!user) return <Navigate to="/login" />;

  return children;
}