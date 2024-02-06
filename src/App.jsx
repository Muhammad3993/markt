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
import Login from "./pages/Login.jsx";
import Detail from "./pages/Detail.jsx";
import Register from "./pages/Register.jsx";


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
                <Route path="/detail" exact element={<Detail/>} />
                <Route path="/login" exact element={<Login/>} />
                <Route path="/register" exact element={<Register/>} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
