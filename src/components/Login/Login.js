import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);
const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/home';
    return (
        <div>
            <div style={{ marginTop: "20px" }}>
                <button onClick={() => {
                    signInWithGoogle()
                        .then(() => {
                            navigate(from, { replace: true })
                        })
                }}>Sign In with Google</button>
            </div>
            <h1>This is Login Page...</h1>
            <form>
                <input type="email" placeholder="Type your email" />
                <br />
                <input type="password" name="" id="" placeholder='Type password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;