import { Outlet } from "react-router-dom";
import SideNav from "../../components/SideNav";
import "./about.css";

function About() {
  var a = [1, 2, 3];

  console.log(a.push(3));

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
