import Login from './Components/Login';
import { useState, useEffect } from 'react';
import './Components/LoginStyles.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from "react-router-dom";
import SignUp from './Components/SignUp';
import './Components/SignStyles.css';
import ForgotPass from './Components/ForgotPass';
import './Components/ForgotStyles.css';
import Reset from './Components/Reset';
import './Components/ResetStyles.css';
import SignIn from './Components/SignIn';
import './Components/SignInStyles.css';
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
import Checkout from "./Components/Checkout"; // Placeholder for Checkout component
import { FaBars, FaTimes } from "react-icons/fa";
import logo1 from "./Assets/logo1.jpg";
import Nav from "./Components/Nav";
function AppContent() {
  const { handleLogout, isAuthenticated } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // Update cart count whenever cartItems changes
  useEffect(() => {
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(count);
  }, [cartItems]);

  return (
    <div className="App">
      <Routes>

        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} onLogout={handleLogout} />}
        />
        <Route path="/nav" element={<Nav />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/Home" element={<Home cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/inmen" element={<InMen cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/inwomen" element={<InWomen cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/inkids" element={<InKids cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/inshoe" element={<InShoe cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ForgotPass" element={<ForgotPass />} />
        <Route path="/Reset" element={<Reset />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
