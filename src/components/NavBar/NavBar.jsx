import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useCart } from "../CartContext/CartContext";

const NavBar = () => {
  const { cartWidget } = useCart();

  return (
    <nav className="navbar-container">
      <Link to="/">
        <img
          className="logojdmmaniac"
          src={"img/jdm-maniac.png"}
          alt="Logo JDM-Maniac"
        />
      </Link>
      <div className="buttons-container">
        <Link to="/auto">
          <p>AUTOS</p>
        </Link>
        <Link to="/rueda">
          <p>RUEDAS</p>
        </Link>
        <Link to="/pintura">
          <p>PINTURAS</p>
        </Link>
      </div>
      <div className="button-cart-conteiner">
        <Link to="/cart">
          <img className="logocart" src={"img/cart.png"} alt="" />
          <div>{cartWidget}</div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
