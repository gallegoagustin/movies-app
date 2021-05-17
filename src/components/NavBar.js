import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/icon.png'

import './NavBar.css';

export default function NavBar() {
    return (
        <header className="navContainer">
            <img className="navIcon" src={Logo} />
            <nav>
                <ul className="navList">
                    <li className="listItem">
                        <NavLink exact to="/"><h2>Home</h2></NavLink>
                    </li>
                    <li className="listItem"><h3 className="separator">|</h3></li>
                    <li className="listItem">
                        <NavLink to="/favs" ><h2>Favorites</h2></NavLink>
                    </li>
                    <li className="listItem"><h3 className="separator">|</h3></li>
                    <li className="listItem">
                        <NavLink to="/about" ><h2>About</h2></NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}