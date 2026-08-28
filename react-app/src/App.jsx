


import { useState } from "react";
import "./App.css";

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Building Full-Stack Apps Locally",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      description: "A quick overview of my modern tech stack and local dev setup.",
      date: "2026-08-27",
    },
    {
      id: 2,
      title: "UI Component Architecture with React",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      description: "Designing reusable React elements for dynamic web applications.",
      date: "2026-08-26",
    },
  ]);

  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleAddPost = (e) => {
    e.preventDefault();
    if (!title || !videoUrl) return;

    const newPost = {
      id: Date.now(),
      title,
      videoUrl,
      description,
      date: new Date().toISOString().split("T")[0],
    };

    setPosts([newPost, ...posts]);
    setTitle("");
    setVideoUrl("");
    setDescription("");
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Dev Vlog Studio</h1>
      </header>

      {/* Vlog Creation Form */}
      <section className="vlog-form-card">
        <h3>Add New Vlog Post</h3>
        <form onSubmit={handleAddPost} className="vlog-form">
          <input
            type="text"
            placeholder="Vlog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="url"
            placeholder="Video URL (.mp4 or direct link)"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            required
          />
          <textarea
            placeholder="Short Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />
          <button type="submit">Publish Vlog</button>
        </form>
      </section>

      {/* Vlog Feed */}
      <main className="vlog-feed">
        {posts.map((post) => (
          <article key={post.id} className="vlog-card">
            <video controls>
              <source src={post.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="vlog-card-content">
              <div className="vlog-card-header">
                <h2>{post.title}</h2>
                <span>{post.date}</span>
              </div>
              <p>{post.description}</p>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}