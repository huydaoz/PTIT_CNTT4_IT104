import { Link, Outlet } from "react-router-dom";

export default function BlogLayout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside
        style={{
          width: "200px",
          borderRight: "1px solid #ccc",
          padding: "10px",
        }}
      >
        <h2>My Blog</h2>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="/blog/posts">Posts</Link>
            </li>
          </ul>
        </nav>
        <footer style={{ marginTop: "20px", fontSize: "12px" }}>
          © 2025 My Blog
        </footer>
      </aside>

      <main style={{ flex: 1, padding: "16px" }}>
        <Outlet />
      </main>
    </div>
  );
}
