import { useEffect, useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";
import "../App.css";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await API.get("/posts");
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <h2 style={{ marginBottom: "20px" }}>📢 Latest Posts</h2>

        {posts.length === 0 ? (
          <p>No posts available...</p>
        ) : (
          posts.map((p) => (
            <div key={p._id} className="post-card">
              <h3>{p.title}</h3>
              <p>{p.content}</p>

              <div className="post-actions">
                <button className="like-btn">❤️ Like</button>
                <button className="comment-btn">💬 Comment</button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}