import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home  from "./Home";
import FirstPage  from "./FirstHome";
import  Cart  from "./Cart";
import  Pagenotfound  from "./Pagenotfound";

function App()
{
  return(
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link>
        <Link>Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<PagenOtFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;