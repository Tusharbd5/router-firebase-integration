import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Register.css';

const Register = () => {

    return (
        <div className='register'>
            <h3>Please Register Now-</h3>

            <form>
                <input type="text" placeholder="Your Name" />
                <br />
                <input type="email" placeholder="Type your email" />
                <br />
                <input type="password" name="" id="" placeholder='Type password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;