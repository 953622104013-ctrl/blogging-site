import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const nav = useNavigate();

  return (
    <div className="navbar">
      <div className="title">🚀 BlogPro</div>

      <div className="nav-links">
        <button onClick={() => nav("/")}>Dashboard</button>
        <button onClick={() => nav("/create")}>New Post</button>
        <button onClick={() => {
          localStorage.removeItem("token");
          nav("/auth");
        }}>
          Logout
        </button>
      </div>
    </div>
  );
}