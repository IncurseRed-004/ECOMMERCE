import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import { useState } from "react";
import Login from "./Pages/Login";
import Register from "./Pages/Registerpage";
import {ToastContainer} from "react-toastify"
import AddProduct from "./admin/Addproducts";
import Listproducts from "./admin/ListProducts";
import EditProducts from "./admin/EditProducts";
import ProtectedRoute from "./utils/ProtectedRoute";
import ListUsers from "./admin/ListUsers";
import EditUser from "./admin/EditUser";
import Cart from "./Pages/Cart";
import Userprofile from "./Pages/Userprofile"; 
import Pagenotfound from "./Pages/Pagenotfound";
import axios from "axios";



function App(){

  const fetchProducts = async()=>{
    const {data} = await axios.get("https://fakestoreapi.com/products"); // {status, data:[]}
    console.log (data);
  }

  fetchProducts();

  const products =[]

  const [cartItems, setCartItems] = useState(0);



  return(
    <>
    <BrowserRouter>
 <Header  cartItems ={cartItems}/>
<ToastContainer position="top-right" autoClose={2000} />
    <Routes>
    <Route path="/" element={<Home products={products}/>}/>
    <Route path="/products" element={<Products products={products}/>} />
    <Route path="/product/:id" element={<ProductDetails 
    products={products} 
    setCartItems ={setCartItems}
    cartItems = {cartItems} 
    />} />

    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/admin/add-product" element={
      <ProtectedRoute requiredRole ={["admin" , "seller"]}>
        <AddProduct />
      </ProtectedRoute>} />
    <Route path="/admin/list-products" element={<ProtectedRoute requiredRole ={["admin"]}>
       <Listproducts /> 
    </ProtectedRoute>} />
    <Route path="/admin/list-users" element={<ProtectedRoute requiredRole ={["admin"]}>
       <ListUsers /> 
    </ProtectedRoute>} />
    <Route path="/admin/edit-user/:id" element={<ProtectedRoute requiredRole ={["admin"]}>
       <EditUser /> 
    </ProtectedRoute>} />
    <Route path="/admin/edit-product/:id" element={<EditProducts />} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/profile" element={<Userprofile/>} />
      <Route path="*" element={<Pagenotfound />} />
    </Routes>

<Footer />
    </BrowserRouter>
    </>
  )
}
export default App;