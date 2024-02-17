import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register/register";
import Login from "./pages/Login/login";
import Home from "./pages/Home/home";
import { useState } from "react";
import ProductPage from "./pages/ProductPage/prodPage";

function MainRoutes() {
  const [products, setProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Routes>
      <Route element={<Register />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route
        element={
          <Home
            isVisible={isVisible}
            postOrUpdate={true}
            setIsVisible={setIsVisible}
            products={products}
            setProducts={setProducts}
          />
        }
        path="/home"
      />
      <Route
        element={
          <ProductPage
            setIsVisible={setIsVisible}
              isVisible={isVisible}
          />
        }
        path="home/product/:id"
      />
    </Routes>
  );
}

export default MainRoutes;
