import { NavLink } from "react-router-dom";
import "./sidenav.css";

function SideNav() {
  return (
    <div className="sidenav">
      <ul>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            item2
          </NavLink>
        </li>
        <li>
          <NavLink to="/">item2</NavLink>
        </li>
        <li>
          <NavLink to="/">item3</NavLink>
        </li>
        <li>
          <NavLink>item1</NavLink>
        </li>
        <li>
          <NavLink>item2</NavLink>
        </li>
        <li>
          <NavLink>item3</NavLink>
        </li>
        <li>
          <NavLink>item1</NavLink>
        </li>
        <li>
          <NavLink>item2</NavLink>
        </li>
        <li>
          <NavLink>item3</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
