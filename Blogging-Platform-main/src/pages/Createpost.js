import { useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function CreatePost() {
  const [form, setForm] = useState({ title: "", content: "" });
  const nav = useNavigate();

  const handlePost = async () => {
    if (!form.title || !form.content) {
      alert("Fill all fields");
      return;
    }

    try {
      await API.post("/posts", form);
      nav("/");
    } catch (err) {
      console.log(err);
      alert("Error posting");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="card">
          <h2 style={{ marginBottom: "15px" }}>✍️ Create New Post</h2>

          <input
            type="text"
            placeholder="Enter post title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />

          <textarea
            className="textarea"
            placeholder="Write your content here..."
            value={form.content}
            onChange={(e) =>
              setForm({ ...form, content: e.target.value })
            }
          />

          <button onClick={handlePost} className="publish-btn">
            🚀 Publish Post
          </button>
        </div>
      </div>
    </>
  );
}