import { useContext } from "react";
import { AuthContext } from "../context/authcontext";
import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user || user.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
}