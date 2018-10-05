import React from 'react';

import './HeaderNavbarComponent.css';
import firebase from '../Config/fbConfig';

const HeaderNavbarComponent = () => {
    function logout() {
        firebase.auth().signOut();
    }

    return (
        <nav className='navbar fixed-top header-nav'>
            <span className='navbar-title'>SetFree</span>
            <button onClick={logout}>Logout</button>
        </nav>
    )
}

export default HeaderNavbarComponent;
