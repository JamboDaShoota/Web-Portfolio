import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Navbar from "./components/navbar/navbar";
import Projects from "./pages/projects/projects";
import Certificates from "./pages/certificates/certificates";

function App() {
  return (
    <div className="main-content f-wh-vw">
      <div className="foreground f-wh-per fl-c-c-c">
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/certificates" element={<Certificates />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
