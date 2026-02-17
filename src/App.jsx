import {  Routes, Route } from "react-router-dom";
import Cards from "../compoment/Cards";
import Footer from "../compoment/Footer";
import Hero from "../compoment/Hero";
import Navbar from "../compoment/Navbar";
import About from "../pages/About";
import "./index.css";
import Contact from "../pages/Contact";
import Items from "../pages/Items";

function App() {
  return (
    <>
      
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Cards />
            </>
          }
        />

        {/* About Page */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/item" element={<Items/>}/>

      </Routes>

      <Footer />
      </>

    
  );
}

export default App;
