import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Homelayout from "./components/HOmelayout";
import About from "./pages/about/About";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homelayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        {/* <Route path="*" element={<div>Login</div>} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
