import React from 'react';
import { NavLink } from "react-router-dom";
import './Navigation.css'



const Navigation = props => {

    return (

        <header className="mainNav">

            <img src="./img/logo.png" alt="logo" id='logo'/>
            <nav>

                <ul>
                    <NavLink to="/">Products</NavLink>
                    <NavLink to="/cart">Cart ({props.cartItemNumber})</NavLink>

                </ul>

            </nav>
        </header>


    )





}

export default Navigation;