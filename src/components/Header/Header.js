import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/register">Register</Link>
                <span style={{ marginRight: "10px" }}>{user?.displayName && user.displayName}</span>
                {
                    user?.uid
                        ?
                        <button onClick={handleSignOut}>Sign Out</button>
                        :
                        <Link to="/login">Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;