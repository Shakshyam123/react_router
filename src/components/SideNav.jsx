import { NavLink } from "react-router-dom";
import "./sidenav.css";
function SideNav() {
  return (
    <div className="sidenav">
      <ul>
        <li>
          <NavLink to="*">item1</NavLink>
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
