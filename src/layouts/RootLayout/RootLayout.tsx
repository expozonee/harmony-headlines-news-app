import { Link, Outlet } from "react-router-dom";
import "./RootLayout.css";

export default function RootLayout() {
  return (
    <div className="layout__container">
      <header>
        <h1>Logo</h1>
        <Link to={"/"}>
          <button>News</button>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}
