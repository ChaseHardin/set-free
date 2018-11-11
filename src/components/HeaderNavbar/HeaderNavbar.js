import React from 'react';
import firebase from '../../FireBaseConfig';
import './HeaderNavbar.css';

const HeaderNavbar = () => {
    function logout() {
        firebase.auth().signOut();
    }

    return (
        <nav className='navbar fixed-top header-nav'>
            <span className='navbar-title'>SetFree</span>
            <button onClick={logout} className='btn btn-danger'>Logout</button>
        </nav>
    )
}

export default HeaderNavbar;
