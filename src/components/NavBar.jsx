import React from "react";
import {NavLink} from "react-router-dom";
import "../public/styles/page.scss";

export default function NavBar () {
    return (
        <nav className="menu-wrapper">
            <ul className="menu">
                <li className="menu-item"><NavLink to="/">Home</NavLink></li>
                <li className="menu-item"><NavLink to="/fav">Favorites</NavLink></li>
                <li className="menu-item"><NavLink to="/cart">Cart</NavLink></li>
            </ul>
        </nav>
    )
}