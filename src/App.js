import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ProductsPage />} />
        <Route exact path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}
