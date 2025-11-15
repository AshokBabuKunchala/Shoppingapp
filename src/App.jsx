import Login from './Components/Login';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import SignUp from './Components/SignUp';
import ForgotPass from './Components/ForgotPass';
import Reset from './Components/Reset';
import SignInInline from './Components/SignInInline';
import Home from './Components/Home';
import './Components/HomeStyles.css';
import Mens from "./Components/Mens";
import Womens from "./Components/Womens";
import Kids from "./Components/Kids";
import Shoes from "./Components/Shoes";
import "./Components/CollectionStyles.css";
import InMen from "./Components/InMen";
import InWomen from "./Components/InWomen";
import InKids from "./Components/InKids";
import InShoe from "./Components/InShoe";
import { AuthProvider, useAuth } from "./Components/Authenticate";
import Cart from "./Components/Cart";
import { FaBars, FaTimes } from "react-icons/fa";
import logo1 from "./Assets/logo1.jpg";
import Nav from "./Components/Nav";
import Orders from "./Components/Orders";

function AppContent() {
  const { handleLogout, isAuthenticated } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(count);
  }, [cartItems]);

  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<SignInInline />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} onLogout={handleLogout} />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/home" element={<Home cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/inmen" element={<InMen cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/inwomen" element={<InWomen cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/inkids" element={<InKids cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/inshoe" element={<InShoe cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
