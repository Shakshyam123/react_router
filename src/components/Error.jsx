import { NavLink } from "react-router-dom";
import "./error.css";

function Error() {
  return (
    <div className="hello">
      <div className="error">
        <h1>!!page not found!!</h1>
        <p>
          go to<NavLink to="/"> Home</NavLink>
        </p>
      </div>
    </div>
  );
}
export default Error;
