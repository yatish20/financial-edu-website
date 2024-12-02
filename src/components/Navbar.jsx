import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav id="navbar">
            <ul className="navlist">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Signup">Login</Link></li>
                <li><Link to="/Transaction">Account Transaction</Link></li>
                <li><Link to="/Chatbot">Chatbot</Link></li>

            </ul>
            {/* <button type="search" className="collapsible">Search</button> */}
        </nav>
    );
};

export default Navbar;
