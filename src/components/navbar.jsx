import React from "react";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import "./navbar.css"
import Logo from "../assets/Logo.png"

export const Navbar = () => {
    return <div className="nav">
        <div className="links">
            <div className="nav-logo">
                <Link className="nav-logo" to={"/"}><img src={Logo} height={50} width={50}/>
                    <p className="title">TECHGEEK</p></Link>
            </div>
            <Link to={"/Reviews"}>Reviews</Link>
            <Link to={"/Personalinfo"}>Personal Info</Link>
        </div>
        <div className="last">
            <Link to={"/Login"}>Login</Link>
            <Link to={"/Cart"}><ShoppingCart size={30} /></Link>
        </div>
    </div>
};
