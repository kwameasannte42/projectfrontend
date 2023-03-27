import { Link } from "react-router-dom";
import './style/page.style.css';

export default function NotFound() {
  return (
    <div className="body-page">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", height: "100vh" }}>
        <h1 className="linear-wipe h1-page">404</h1>
        <h1>Oops! Sorry, page not found.</h1>
        <Link to="/">Go back to home page</Link>
      </div>
    </div>
  );
}

