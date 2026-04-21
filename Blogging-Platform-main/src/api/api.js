import { useState } from "react";
import API from "../api/api";

export default function Login() {
  const [data, setData] = useState({ username: "", password: "" });

  const handleLogin = async () => {
    try {
      const res = await API.post("/token/", data);
      localStorage.setItem("token", res.data.access);
      alert("Login successful");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        placeholder="Username"
        onChange={(e) => setData({ ...data, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}