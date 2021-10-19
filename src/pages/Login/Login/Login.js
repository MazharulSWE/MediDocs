import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div id="login">
            <h2>please Login</h2>
            <form className="regi">
                  <input className="input-style" type="email" placeholder="Enter Email" />
                  <br />
                  <input className="input-style" type="password" placeholder="Enter password"/>
                  <br />
                  <input className="submit-btn" type="submit" value="Submit" />
             </form>
            <h1>---------Or----------</h1>
            <button onClick={signInUsingGoogle} className="btn btn-primary">Google Sign In</button>
             <p>New User? <a href="/register">Register</a></p>
        </div>
    );
};

export default Login;