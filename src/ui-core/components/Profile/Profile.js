import React from 'react';
import firebase from '../../FireBaseConfig';
import './Profile.css';

const Profile = () => {
    function logout() {
        firebase.auth().signOut();
    }

    return (
        <div className="profile-title">
            <h3>Profile Page</h3>
            <button onClick={logout} className='btn btn-danger'>Logout</button>
        </div>
    )
}

export default Profile;