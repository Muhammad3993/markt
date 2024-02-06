// React Router Dom
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
// Component
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
// Pages
import Home from "./pages/Home"
import Category from "./pages/Category"
import Accessoriess from "./pages/Accessoriess.jsx";
import Cart from "./pages/Cart.jsx";
import Wishlist from "./pages/Wishlist.jsx";


function App() {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/category" exact element={<Category/>} />
                <Route path="/accessories" exact element={<Accessoriess/>} />
                <Route path="/cart" exact element={<Cart/>} />
                <Route path="/wishlist" exact element={<Wishlist/>} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
