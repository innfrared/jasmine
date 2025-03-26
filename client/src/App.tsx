import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./presentation/screen/landing/LandingScreen";
import Comparison from "./presentation/screen/comparison/ComparisonScreen";
import Products from "./presentation/screen/products/ProductsScreen";
import ProductDetailsScreen from "./presentation/screen/productDetails/ProductDetailsScreen";
import CartScreen from "./presentation/screen/cart/CartScreen";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/comparison" element={<Comparison />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<CartScreen />} />
                <Route path="/products/category/:category" element={<Products />} />
                <Route path="/products/category/:category/:subcategory" element={<Products />} />
                <Route path="/products/details/:productName" element={<ProductDetailsScreen />} />
            </Routes>
        </Router>
    );
};

export default App;
