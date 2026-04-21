import { useState } from "react";
import API from "../api/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSend = async () => {
    if (!email) return alert("Enter email");

    try {
      await API.post("/auth/forgot-password", { email });
      alert("Reset link sent to your email 📩");
    } catch (err) {
      console.log(err);
      alert("Error sending email");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleSend}>Send Reset Link</button>
      </div>
    </div>
  );
}