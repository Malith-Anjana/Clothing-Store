import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";


const App = () => {
  const user = true;
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/products/:category" element={<ProductList/>}/>
    <Route path="/products/:id" element={<Product/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/login" element={user ? <Home/> : <Login/>}/>
    <Route path="/register" element={user ? <Home/> :<Register/>}/>
   </Routes>
  );
};

export default App;
