// React Router Dom
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
// Component
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
// Pages
import Home from "./pages/Home"
import New from "./pages/New"
import Category from "./pages/Category"
import Accessoriess from "./pages/Accessoriess.jsx";


function App() {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/new" exact element={<New/>} />
                <Route path="/category" exact element={<Category/>} />
                <Route path="/accessories" exact element={<Accessoriess/>} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
