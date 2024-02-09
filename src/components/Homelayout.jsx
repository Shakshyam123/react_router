import Nav from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Homelayout() {
  return (
    <div style={{ height: "100px", display: "flex", flexDirection: "column" }}>
      <Nav />
      <Outlet />

      <Footer />
    </div>
  );
}

export default Homelayout;
