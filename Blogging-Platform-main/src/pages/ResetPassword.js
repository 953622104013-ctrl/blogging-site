import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/api";

export default function ResetPassword() {
  const { token } = useParams();
  const nav = useNavigate();

  const [password, setPassword] = useState("");

  const handleReset = async () => {
    if (!password) return alert("Enter new password");

    try {
      await API.post(`/auth/reset-password/${token}`, { password });
      alert("Password updated ✅");
      nav("/auth");
    } catch (err) {
      console.log(err);
      alert("Invalid or expired token");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Reset Password</h2>

        <input
          type="password"
          placeholder="New password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleReset}>Update Password</button>
      </div>
    </div>
  );
}