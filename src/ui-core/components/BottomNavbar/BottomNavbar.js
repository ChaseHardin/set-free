import React from 'react';
import { Link } from 'react-router-dom'
import './BottomNavbar.css';

const BottomNavBar = () => {
    return (
        <nav className='navbar bottom-nav fixed-bottom'>
            <Link to="/" className="home-route nav-item nav-link">
                <i className="fa fa-home" />
            </Link>
            <Link to="/score" className="score-route nav-item nav-link">
                <i className="fa fa-trophy" />
            </Link>
            <Link to="/profile" className="profile-route nav-item nav-link">
                <i className="fa fa-user-circle-o" />
            </Link>
        </nav>
    )
}

export default BottomNavBar;