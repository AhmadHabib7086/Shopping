import { Routes, Route } from "react-router-dom";
import Cards from "../compoment/Cards";
import Footer from "../compoment/Footer";
import Hero from "../compoment/Hero";
import Navbar from "../compoment/Navbar";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Items from "../pages/Items";
import Login from "../compoment/Login";
import Register from "../compoment/Register";
import "./index.css";
import ProductDetails from "../pages/ProductDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Cards />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/item" element={<Items />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
