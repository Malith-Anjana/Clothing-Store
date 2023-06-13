import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import { useSelector } from "react-redux";


const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/products/:category" element={<ProductList/>}/>
    <Route path="/product/:id" element={<Product/>}/>
    <Route path="/success" element={<Success/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/login" element={user ? <Home/> : <Login/>}/>
    <Route path="/register" element={user ? <Home/> :<Register/>}/>
   </Routes>
  );
};

export default App;
