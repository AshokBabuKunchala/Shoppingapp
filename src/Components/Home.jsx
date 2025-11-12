import React,{useState,useEffect} from "react";
import {useAuth} from "./Authenticate";
import {  useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./HomeStyles.css";
import Slides from "./Slides";
 import Mens from "./Mens";
  import men1 from "../Assets/men1.jpg";
 import men2 from "../Assets/men2.jpg";
 import men3 from "../Assets/men3.jpg";
 import men4 from "../Assets/men4.jpg";
 import men5 from "../Assets/men5.jpg";
 import men6 from "../Assets/men6.jpg";
import Womens from "./Womens";
 import women1 from "../Assets/women1.jpg";
 import women2 from "../Assets/women2.jpg";
 import women3 from "../Assets/women3.jpg";
 import women4 from "../Assets/women4.jpg";
 import women5 from "../Assets/women5.jpg";
 import women6 from "../Assets/women6.jpg";
 import Kids from "./Kids";
  import kid1 from "../Assets/kid1.jpg";
 import kid2 from "../Assets/kid2.jpg";
 import kid3 from "../Assets/kid3.jpg";
 import kid4 from "../Assets/kid4.jpg";
 import kid5 from "../Assets/kid5.jpg";
 import kid6 from "../Assets/kid6.jpg";
import Shoes from "./Shoes";
  import shoe1 from "../Assets/shoe1.jpg";
  import shoe2 from "../Assets/shoe2.jpg";
  import shoe3 from "../Assets/shoe3.jpg";
  import shoe4 from "../Assets/shoe4.jpg";
  import shoe5 from "../Assets/shoe5.jpg";
  import shoe6 from "../Assets/shoe6.jpg";
import "./CollectionStyles.css";
import InMen from "./InMen";
import InWomen from "./InWomen";
import InKids from "./InKids";
import InShoe from "./InShoe";
 
 import Cart from "../Components/Cart";
 import Nav from "../Components/Nav";
function Home({ cartItems, setCartItems }) {

  const [menuOpen, setMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false); // toggles cart display
  const [cartCount, setCartCount] = useState(0); // number of items in cart
  const navigate = useNavigate();
  const { isAuthenticated, handleLogin, handleLogout } = useAuth();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleCart = () => setShowCart(!showCart);

  // Update cart count whenever cartItems changes
  useEffect(() => {
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(count);
  }, [cartItems]);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{
      fontFamily: '"Poppins", sans-serif',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    }}>
     <section>
        <Nav cartItems={cartItems}/>
        </section>

       <section style={{
         marginTop: '80px' // Account for fixed navbar
       }}>
        <Slides/>
        </section>
     <main style={{
       padding: '40px 20px',
       maxWidth: '1200px',
       margin: '0 auto'
     }}>

  {/* Men Collection */}
  <section  id="mens-section" className="mens-section">
  <h2>Men's Collection</h2>
  <div className="category-row" style={{ display: 'flex', flexWrap: 'nowrap' }}>

 <Link
  to="/inmen"
  state={{
    id: "men1",
    image: men1,
    brand: "Anuj Fashion",
    name: "Men Printed Cotton Blend Straight Kurta",
    color: "Yellow",
    price: 800,
    originalPrice: 1499,
    discount: 25,
  }}
  style={{ textDecoration: "none", color: "inherit", flex: 1, textAlign: 'center' }}
>
  <img src={men1} alt="Men 1" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
  <div className="product-info">
    <p>Anuj Fashion</p>
    <p>Men Printed Cotton Blend Straight Kurta</p>
    <p>Laime</p>
    <p>
      ₹800 <span style={{ textDecoration: "line-through", color: "gray" }}>₹1,499</span>{" "}
      <span style={{ color: "green" }}>25% off</span>
    </p>
  </div>
</Link>
 <Link
  to="/inmen"
  state={{
    id: "men2",
    image: men2,
    brand: "Royal Threads",
    name: "Men Solid Cotton Kurta",
    color: "Yellow",
    price: 399,
    originalPrice: 1499,
    discount: 64,
  }}
  style={{ textDecoration: "none", color: "inherit", flex: 1, textAlign: 'center' }}
>
  <img src={men2} alt="Men 2" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
  <div className="product-info">
    <p>Royal Threads</p>
    <p>Men Solid Cotton Kurta</p>
    <p>Yellow</p>
    <p>
      ₹399 <span style={{ textDecoration: "line-through", color: "gray" }}>₹999</span>{" "}
      <span style={{ color: "Blue" }}>64% off</span>
    </p>
  </div>
</Link>
 <Link
  to="/inmen"
  state={{
    id: "men3",
    image: men3,
    brand: "Anuj Fashion",
    name: "Men T-shirt",
    color: "Maroon",
    price: 350,
    originalPrice: 1390,
    discount: 65,
  }}
  style={{ textDecoration: "none", color: "inherit", flex: 1, textAlign: 'center' }}
>
  <img src={men3} alt="Men 3" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
  <div className="product-info">
    <p>Anuj Fashion</p>
    <p>Men T-shirt</p>
    <p>Maroon</p>
    <p>
      ₹350 <span style={{ textDecoration: "line-through", color: "gray" }}>₹1,499</span>{" "}
      <span style={{ color: "green" }}>65% off</span>
    </p>
  </div>
</Link>
<Link
  to="/inmen"
  state={{
    id: "men4",
    image: men4,
    brand: "Vonica",
    name: "FullHand T-shirt",
    color: "Red",
    price: 350,
    originalPrice: 1490,
    discount: 84,
  }}
  style={{ textDecoration: "none", color: "inherit", flex: 1, textAlign: 'center' }}
>
  <img src={men4} alt="Men 4" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
  <div className="product-info">
    <p>Vonica</p>
    <p>FullHand T-shirt</p>
    <p>Red</p>
    <p>
      ₹350 <span style={{ textDecoration: "line-through", color: "gray" }}>₹999</span>{" "}
      <span style={{ color: "Blue" }}>84% off</span>
    </p>
  </div>
</Link>
<Link
  to="/inmen"
  state={{
    id: "men5",
    image: men5,
    brand: "Royal Threads",
    name: "Men HalfHands Cotton Shirt",
    color: "Light Blue",
    price: 450,
    originalPrice: 1499,
    discount: 55,
  }}
  style={{ textDecoration: "none", color: "inherit", flex: 1, textAlign: 'center' }}
>
  <img src={men5} alt="Men 5" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
  <div className="product-info">
    <p>Royal Threads</p>
    <p>Men HalfHands Cotton Shirt </p>
    <p>Light Blue</p>
    <p>
      ₹450 <span style={{ textDecoration: "line-through", color: "gray" }}>₹999</span>{" "}
      <span style={{ color: "Blue" }}>55% off</span>
    </p>
  </div>
</Link>
<Link
  to="/inmen"
  state={{
    id: "men6",
    image: men6,
    brand: "Rise Fashions",
    name: "Men Hoodie",
    color: "Red",
    price: 399,
    originalPrice: 1490,
    discount: 64,
  }}
  style={{ textDecoration: "none", color: "inherit", flex: 1, textAlign: 'center' }}
>
  <img src={men6} alt="Men 6" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
  <div className="product-info">
    <p>Rise Fashions</p>
    <p>Men Hoodie</p>
    <p>Red</p>
    <p>
      ₹399 <span style={{ textDecoration: "line-through", color: "gray" }}>₹999</span>{" "}
      <span style={{ color: "Blue" }}>64% off</span>
    </p>
  </div>
</Link>
</div>
</section>

{/* Women Collection */}
<section id="women-section" className="women-section">
  <h2>Women's Collection</h2>
  <div className="category-row" style={{ display: 'flex', flexWrap: 'nowrap' }}>

    {/* Product 1 */}
    <Link
      to="/inwomen"
      state={{
        id: "women1",
        image: women1,
        brand: "Elegant Attire",
        name: "Women Floral Printed Anarkali Kurta",
        color: "Pink",
        price: 999,
        originalPrice: 1999,
        discount: 50,
      }}
      style={{ textDecoration: "none", color: "inherit", flex: 1, textAlign: 'center' }}
    >
      <img src={women1} alt="Women 1" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div className="product-info">
        <p>Elegant Attire</p>
        <p>Women Floral Printed Anarkali Kurta</p>
        <p>Pink</p>
        <p>
          ₹999{" "}
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            ₹1,999
          </span>{" "}
          <span style={{ color: "green" }}>50% off</span>
        </p>
      </div>
    </Link>

    {/* Product 2 */}
    <Link
      to="/inwomen"
      state={{
        id: "women2",
        image: women2,
        brand: "Trendy Vogue",
        name: "Women Solid Georgette Top",
        color: "Black",
        price: 699,
        originalPrice: 1399,
        discount: 55,
      }}
      style={{ textDecoration: "none", color: "inherit", flex: 1, textAlign: 'center' }}
    >
      <img src={women2} alt="Women 2" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div className="product-info">
        <p>Trendy Vogue</p>
        <p>Women Solid Georgette Top</p>
        <p>Black</p>
        <p>
          ₹699{" "}
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            ₹1,399
          </span>{" "}
          <span style={{ color: "blue" }}>55% off</span>
        </p>
      </div>
    </Link>

    {/* Product 3 */}
    <Link
      to="/inwomen"
      state={{
        id: "women3",
        image: women3,
        brand: "Urban Style",
        name: "Women Casual Denim Jacket",
        color: "Blue",
        price: 1199,
        originalPrice: 2499,
        discount: 52,
      }}
      style={{ textDecoration: "none", color: "inherit", flex: 1, textAlign: 'center' }}
    >
      <img src={women3} alt="Women 3" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div className="product-info">
        <p>Urban Style</p>
        <p>Women Casual Denim Jacket</p>
        <p>Blue</p>
        <p>
          ₹1,199{" "}
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            ₹2,499
          </span>{" "}
          <span style={{ color: "green" }}>52% off</span>
        </p>
      </div>
    </Link>

    {/* Product 4 */}
    <Link
      to="/inwomen"
      state={{
        id: "women4",
        image: women4,
        brand: "Grace & Glam",
        name: "Women Fit and Flare Dress",
        color: "Red",
        price: 849,
        originalPrice: 1799,
        discount: 53,
      }}
      style={{ textDecoration: "none", color: "inherit", flex: 1, textAlign: 'center' }}
    >
      <img src={women4} alt="Women 4" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div className="product-info">
        <p>Grace & Glam</p>
        <p>Women Fit and Flare Dress</p>
        <p>Red</p>
        <p>
          ₹849{" "}
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            ₹1,799
          </span>{" "}
          <span style={{ color: "blue" }}>53% off</span>
        </p>
      </div>
    </Link>

    {/* Product 5 */}
    <Link
      to="/inwomen"
      state={{
        id: "women5",
        image: women5,
        brand: "FashionAura",
        name: "Women Embroidered Straight Kurta",
        color: "Green",
        price: 799,
        originalPrice: 1899,
        discount: 58,
      }}
      style={{ textDecoration: "none", color: "inherit", flex: 1, textAlign: 'center' }}
    >
      <img src={women5} alt="Women 5" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div className="product-info">
        <p>FashionAura</p>
        <p>Women Embroidered Straight Kurta</p>
        <p>Green</p>
        <p>
          ₹799{" "}
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            ₹1,899
          </span>{" "}
          <span style={{ color: "green" }}>58% off</span>
        </p>
      </div>
    </Link>

    {/* Product 6 */}
    <Link
      to="/inwomen"
      state={{
        id: "women6",
        image: women6,
        brand: "Style Diva",
        name: "Women Hooded Sweatshirt",
        color: "Lavender",
        price: 899,
        originalPrice: 1999,
        discount: 55,
      }}
      style={{ textDecoration: "none", color: "inherit", flex: 1, textAlign: 'center' }}
    >
      <img src={women6} alt="Women 6" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div className="product-info">
        <p>Style Diva</p>
        <p>Women Hooded Sweatshirt</p>
        <p>Lavender</p>
        <p>
          ₹899{" "}
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            ₹1,999
          </span>{" "}
          <span style={{ color: "blue" }}>55% off</span>
        </p>
      </div>
    </Link>

  </div>
</section>

{/* Kids Collection */}
<section id="kids-section" className="kids-section">
  <h2>Kids' Collection</h2>
  <div className="category-row" style={{ display: 'flex', flexWrap: 'nowrap' }}>

    {/* Product 1 */}
    <Link
      to="/inkids"
      state={{
        id: "kid1",
        image: kid1,
        brand: "Little Champs",
        name: "Boys Printed Cotton T-Shirt",
        color: "Green",
        price: 199,
        originalPrice: 599,
        discount: 66,
      }}
      style={{ textDecoration: "none", color: "inherit", flex: 1, textAlign: 'center' }}
    >
      <img src={kid1} alt="Kids 1" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div className="product-info">
        <p>Little Champs</p>
        <p>Boys Printed Cotton T-Shirt</p>
        <p>Green</p>
        <p>
          ₹199{" "}
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            ₹599
          </span>{" "}
          <span style={{ color: "green" }}>66% off</span>
        </p>
      </div>
    </Link>

    {/* Product 2 */}
    <Link
      to="/inkids"
      state={{
        id: "kid2",
        image: kid2,
        brand: "Mini Trends",
        name: "Girls Floral Dress",
        color: "Purple",
        price: 329,
        originalPrice: 899,
        discount: 63,
      }}
      style={{ textDecoration: "none", color: "inherit", flex: 1, textAlign: 'center' }}
    >
      <img src={kid2} alt="Kids 2" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div className="product-info">
        <p>Mini Trends</p>
        <p>Girls Floral Dress</p>
        <p>Purple</p>
        <p>
          ₹329{" "}
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            ₹899
          </span>{" "}
          <span style={{ color: "blue" }}>63% off</span>
        </p>
      </div>
    </Link>

    {/* Product 3 */}
    <Link
      to="/inkids"
      state={{
        id: "kid3",
        image: kid3,
        brand: "TinyWalk",
        name: "Kids Casual Shorts Set",
        color: "Orange",
        price: 249,
        originalPrice: 699,
        discount: 64,
      }}
      style={{ textDecoration: "none", color: "inherit", flex: 1, textAlign: 'center' }}
    >
      <img src={kid3} alt="Kids 3" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div className="product-info">
        <p>TinyWalk</p>
        <p>Kids Casual Shorts Set</p>
        <p>Orange</p>
        <p>
          ₹249{" "}
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            ₹699
          </span>{" "}
          <span style={{ color: "green" }}>64% off</span>
        </p>
      </div>
    </Link>

    {/* Product 4 */}
    <Link
      to="/inkids"
      state={{
        id: "kid4",
        image: kid4,
        brand: "BabyJoy",
        name: "Infant Cotton Romper",
        color: "Sky Blue",
        price: 189,
        originalPrice: 499,
        discount: 62,
      }}
      style={{ textDecoration: "none", color: "inherit", flex: 1, textAlign: 'center' }}
    >
      <img src={kid4} alt="Kids 4" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div className="product-info">
        <p>BabyJoy</p>
        <p>Infant Cotton Romper</p>
        <p>Sky Blue</p>
        <p>
          ₹189{" "}
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            ₹499
          </span>{" "}
          <span style={{ color: "blue" }}>62% off</span>
        </p>
      </div>
    </Link>

    {/* Product 5 */}
    <Link
      to="/inkids"
      state={{
        id: "kid5",
        image: kid5,
        brand: "SmartKid",
        name: "Girls Party Frock",
        color: "Peach",
        price: 449,
        originalPrice: 1099,
        discount: 59,
      }}
      style={{ textDecoration: "none", color: "inherit", flex: 1, textAlign: 'center' }}
    >
      <img src={kid5} alt="Kids 5" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div className="product-info">
        <p>SmartKid</p>
        <p>Girls Party Frock</p>
        <p>Peach</p>
        <p>
          ₹449{" "}
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            ₹1,099
          </span>{" "}
          <span style={{ color: "green" }}>59% off</span>
        </p>
      </div>
    </Link>

    {/* Product 6 */}
    <Link
      to="/inkids"
      state={{
        id: "kid6",
        image: kid6,
        brand: "Junior Zone",
        name: "Boys Denim Jacket",
        color: "Navy Blue",
        price: 599,
        originalPrice: 1499,
        discount: 60,
      }}
      style={{ textDecoration: "none", color: "inherit", flex: 1, textAlign: 'center' }}
    >
      <img src={kid6} alt="Kids 6" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div className="product-info">
        <p>Junior Zone</p>
        <p>Boys Denim Jacket</p>
        <p>Navy Blue</p>
        <p>
          ₹599{" "}
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            ₹1,499
          </span>{" "}
          <span style={{ color: "blue" }}>60% off</span>
        </p>
      </div>
    </Link>

  </div>
</section>

  {/* Shoes Collection */}
 
<section id="shoes-section" className="shoes-section">
      <h2>Shoes Collection</h2>
      <div className="category-row" style={{ display: 'flex', flexWrap: 'nowrap' }}>

        {/* Product 1 */}
        <Link
          to="/inshoe"
          state={{
            id: "shoe1",
            image: shoe1,
            brand: "Sporty",
            name: "Men Running Shoes",
            color: "Red",
            price: 1299,
            originalPrice: 2499,
            discount: 48,
          }}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img src={shoe1} alt="Shoe 1" />
          <div className="product-info">
            <p>Sporty</p>
            <p>Men Running Shoes</p>
            <p>Black</p>
            <p>
              ₹1299{" "}
              <span style={{ textDecoration: "line-through", color: "gray" }}>
                ₹2499
              </span>{" "}
              <span style={{ color: "green" }}>48% off</span>
            </p>
          </div>
        </Link>

        {/* Product 2 */}
        <Link
          to="/inshoe"
          state={{
            id: "shoe2",
            image: shoe2,
            brand: "Urban Walk",
            name: "Women Sneakers",
            color: "White",
            price: 1499,
            originalPrice: 2999,
            discount: 50,
          }}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img src={shoe2} alt="Shoe 2" />
          <div className="product-info">
            <p>Urban Walk</p>
            <p>Women Sneakers</p>
            <p>White</p>
            <p>
              ₹1499{" "}
              <span style={{ textDecoration: "line-through", color: "gray" }}>
                ₹2999
              </span>{" "}
              <span style={{ color: "green" }}>50% off</span>
            </p>
          </div>
        </Link>

        {/* Product 3 */}
        <Link
          to="/inshoe"
          state={{
            id: "shoe3",
            image: shoe3,
            brand: "FlexStep",
            name: "Kids Sport Shoes",
            color: "Blue",
            price: 899,
            originalPrice: 1799,
            discount: 50,
          }}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img src={shoe3} alt="Shoe 3" />
          <div className="product-info">
            <p>FlexStep</p>
            <p>Kids Sport Shoes</p>
            <p>Blue</p>
            <p>
              ₹899{" "}
              <span style={{ textDecoration: "line-through", color: "gray" }}>
                ₹1799
              </span>{" "}
              <span style={{ color: "green" }}>50% off</span>
            </p>
          </div>
        </Link>

        {/* Product 4 */}
        <Link
          to="/inshoe"
          state={{
            id: "shoe4",
            image: shoe4,
            brand: "StepPro",
            name: "Men Casual Loafers",
            color: "Brown",
            price: 1299,
            originalPrice: 2599,
            discount: 50,
          }}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img src={shoe4} alt="Shoe 4" />
          <div className="product-info">
            <p>StepPro</p>
            <p>Men Casual Loafers</p>
            <p>Brown</p>
            <p>
              ₹1299{" "}
              <span style={{ textDecoration: "line-through", color: "gray" }}>
                ₹2599
              </span>{" "}
              <span style={{ color: "green" }}>50% off</span>
            </p>
          </div>
        </Link>

        {/* Product 5 */}
        <Link
          to="/inshoe"
          state={{
            id: "shoe5",
            image: shoe5,
            brand: "Urban Walk",
            name: "Women Formal Shoes",
            color: "Beige",
            price: 1699,
            originalPrice: 3399,
            discount: 50,
          }}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img src={shoe5} alt="Shoe 5" />
          <div className="product-info">
            <p>Urban Walk</p>
            <p>Women Formal Shoes</p>
            <p>Beige</p>
            <p>
              ₹1699{" "}
              <span style={{ textDecoration: "line-through", color: "gray" }}>
                ₹3399
              </span>{" "}
              <span style={{ color: "green" }}>50% off</span>
            </p>
          </div>
        </Link>

        {/* Product 6 */}
        <Link
          to="/inshoe"
          state={{
            id: "shoe6",
            image: shoe6,
            brand: "Sporty",
            name: "Men Running Sneakers",
            color: "Aqua Blue",
            price: 1399,
            originalPrice: 2799,
            discount: 50,
          }}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img src={shoe6} alt="Shoe 6" />
          <div className="product-info">
            <p>Sporty</p>
            <p>Men Running Sneakers</p>
            <p>Red</p>
            <p>
              ₹1399{" "}
              <span style={{ textDecoration: "line-through", color: "gray" }}>
                ₹2799
              </span>{" "}
              <span style={{ color: "green" }}>50% off</span>
            </p>
          </div>
        </Link>

      </div>
    </section>
  
</main>


      {/* Footer */}
      <footer style={{
        backgroundColor: '#2c3e50',
        color: '#ecf0f1',
        padding: '40px 20px',
        marginTop: '60px',
        fontFamily: '"Poppins", sans-serif'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
           {/* <img src={logo1} alt="ShopEasy Logo" style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              objectFit: 'cover'
            }} />*/}
            <div>
              <h3 style={{
                margin: '0',
                fontSize: '24px',
                fontWeight: '700',
                background: 'linear-gradient(45deg, #3498db, #2980b9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>ShopEasy</h3>
              <p style={{
                margin: '5px 0 0 0',
                fontSize: '14px',
                color: '#bdc3c7'
              }}>Your one-stop fashion destination</p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: '30px',
            flexWrap: 'wrap'
          }}>
            <Link to="/about" style={{
              color: '#ecf0f1',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = '#3498db'}
            onMouseOut={(e) => e.target.style.color = '#ecf0f1'}
            >About Us</Link>

            <Link to="/contact" style={{
              color: '#ecf0f1',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = '#3498db'}
            onMouseOut={(e) => e.target.style.color = '#ecf0f1'}
            >Contact</Link>

            <Link to="/terms" style={{
              color: '#ecf0f1',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = '#3498db'}
            onMouseOut={(e) => e.target.style.color = '#ecf0f1'}
            >Terms & Conditions</Link>

            <Link to="/privacy" style={{
              color: '#ecf0f1',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = '#3498db'}
            onMouseOut={(e) => e.target.style.color = '#ecf0f1'}
            >Privacy Policy</Link>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid #34495e',
          marginTop: '30px',
          paddingTop: '20px',
          textAlign: 'center',
          fontSize: '14px',
          color: '#bdc3c7'
        }}>
          <p style={{ margin: '0' }}>© 2025 ShopEasy. All rights reserved. | Made with ❤️ for fashion lovers</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
