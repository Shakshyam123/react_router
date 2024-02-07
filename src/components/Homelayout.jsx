import Nav from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Homelayout() {
  return (
    <div>
      <Nav />
      <Outlet />
      <div style={{ marginTop: "50px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Homelayout;
