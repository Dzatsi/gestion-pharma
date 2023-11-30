import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/home"
import Login from "./pages/login"
import Products from "./pages/products"
import About from "./pages/about"
import ProductsList from "./pages/productsList"
import SingleProduct from "./pages/singleproduct"
import NavBar from "./components/navBar"



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/Products" element={<Products />} >
          <Route index element={<ProductsList />} />
          <Route path=":id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
