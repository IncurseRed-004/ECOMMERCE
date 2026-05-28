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

function App(){

  const products =[
    {
      id:1,
      name:"product 1",
      price: 1000,
      description:"This is a beauty essential kit that includes a variety of products to help you look and feel your best. The kit includes a cleanser, toner, moisturizer, and sunscreen, all designed to work together to keep your skin healthy and radiant.",
      image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
      id:2,
      name:"Product 2",
      price: 2000,
      description:"This is a beauty essential kit that includes a variety of products to help you look and feel your best. The kit includes a cleanser, toner, moisturizer, and sunscreen, all designed to work together to keep your skin healthy and radiant.",
      image:"https://images.unsplash.com/photo-1498049794561-7780e7231661"
    },
    {
      id:3,
      name:"Product 3",
      price: 3000,
      description:"This is a beauty essential kit that includes a variety of products to help you look and feel your best. The kit includes a cleanser, toner, moisturizer, and sunscreen, all designed to work together to keep your skin healthy and radiant.",
      image:"https://images.unsplash.com/photo-1483985988355-763728e1935b"
    }
  ]

  const [cartItems, setCartItems] = useState(0);



  return(
    <>
    <BrowserRouter>
 <Header  cartItems ={cartItems}/>

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
    </Routes>

<Footer />
    </BrowserRouter>
    </>
  )
}
export default App;