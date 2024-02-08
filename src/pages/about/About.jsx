import { Outlet } from "react-router-dom";
import SideNav from "../../components/SideNav";
import "./about.css";

function About() {
  return (
    <div className="flexbox">
      <SideNav />

      <div className="outlet">
        hello
        <Outlet />
      </div>
    </div>
  );
}

export default About;
