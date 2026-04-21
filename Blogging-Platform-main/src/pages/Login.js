import { useContext } from "react";
import { AuthContext } from "../context/authcontext";

export default function Login() {
  const { setUser } = useContext(AuthContext);

  const handleLogin = () => {
    localStorage.setItem("token", "123");
    setUser({ name: "User" });
  };

  return (
    <div className="container">
      <div className="card">
        <h2 style={{ textAlign: "center" }}>Welcome Back 👋</h2>

        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />

        <button onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}