import "./App.css";
import Navbar from "./components/navbar";
import Homepage from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Shop from "./pages/shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Homepage />} path={"/"} />
          <Route element={<About />} path={"/about"} />
          <Route element={<Contact />} path={"/contact"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
