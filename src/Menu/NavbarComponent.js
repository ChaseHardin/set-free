import React from 'react';

import { Link } from 'react-router-dom'

import './NavbarComponent.css';

const NavbarComponent = () => {
    return (
        <nav className='navbar'>
            <span className='navbar-title'>SetFree</span>
            
            <Link to="/" className="home-route">Home</Link>
            <Link to="/score" className="score-route">Score</Link>
        </nav>
    )
}

export default NavbarComponent;
