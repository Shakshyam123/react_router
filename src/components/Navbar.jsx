import { NavLink } from "react-router-dom";
import "./navbar.css";

function Nav() {
  return (
    <nav className="headnav">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
