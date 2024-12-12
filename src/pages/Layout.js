import { Outlet, Link } from "react-router-dom";
import './Layout.css';  // Importing the external CSS file

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-item">Home</Link>
          </li>
          <li>
            <Link to="/blogs" className="nav-item">About</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-item">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
