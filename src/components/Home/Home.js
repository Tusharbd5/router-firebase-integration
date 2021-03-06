import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);
const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>{user?.displayName}</h2>
            <img src={user?.photoURL} alt="" />
        </div>
    );
};

export default Home;