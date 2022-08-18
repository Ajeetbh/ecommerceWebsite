import React from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";


const Navbar = (props) => {
 const cartItem=props.cartItem;
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">E-Commerce</Link>
        </h1>
      </div>
      <div className="header-link">
        <ul>
         <li>
         <Link to="/" className="my-shop">My Shopping</Link>
         </li>
        </ul>
        <ul>
         <li>
         <Link to="/cart" className="cart">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
         <span className="cart-length">
            {cartItem.length === 0 ? "" : cartItem.length}  
         </span>
         </Link>
         </li>
        </ul>
        <ul>
         <li>
         <Link to="/signup">SignUp</Link>
         </li>
        </ul>
        <ul>
         <li>
         <Link to="/login">Login</Link>
         </li>
        </ul>
      </div>
    </header>
  );
};
export default Navbar;








