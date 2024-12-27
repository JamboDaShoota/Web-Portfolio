import "./App.css"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import About from "./pages/about/about"
import Navbar from "./components/navbar/navbar"

function App() {

    return <div className="main-content">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
    </div>
}

export default App