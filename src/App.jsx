import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Homelayout from "./components/Homelayout";
import About from "./pages/about/About";
import Error from "./components/Error";
import SideNav from "./components/SideNav";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homelayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />}>
            <Route path="sidenav" element={<SideNav />} />
          </Route>
        </Route>

        {/* <Route path="*" element={<div>Login</div>} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
