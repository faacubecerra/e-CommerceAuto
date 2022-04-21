import React from "react";
import {Link} from "react-router-dom"
import "./NavBar.css"
import logoJDMManiac from '../../img/jdm-maniac.png'
import cart from '../../img/cart.png'

const NavBar = () => {
    return(
        <nav className="navbar-container">
          <Link to="/">
            <img className="logojdmmaniac" src= {logoJDMManiac} alt="Logo JDM-Maniac" />
          </Link>            
            <div className="buttons-container">
              <Link to="/autos">
                <p>AUTOS</p>
              </Link>
              <Link to="/modificaciones">
                <p>MODIFICACIONES</p>
              </Link>
              <Link to="/accesorios">
                <p>ACCESORIOS</p>
              </Link>
            </div>
            <div className="button-cart-conteiner">
              <Link to="/cart">
                <img className="logocart" src={cart} alt="" />
                <div>5</div>
              </Link>
            </div>
        </nav>
    )
}

export default NavBar