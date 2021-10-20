import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    // const {signInUsingGoogle} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";

    const loginEmail = (e) => {
        setEmail(e.target.value);
      };
      const logInPassword = (e) => {
        setPassword(e.target.value);
      };


//Destructure from Context API
  const { user, signInUsingGoogle, userSignInWithEmailPass, error,setError } = useAuth();
  
console.log(user);
const handleGoogleSignIn = () => {
  signInUsingGoogle().then(() => {
    history.push(redirect_uri);
    
  });
};


//login with email password
const submitForLogin = (event) => {
    event.preventDefault();
    userSignInWithEmailPass(email, password)
    .then(() => {
      history.push(redirect_uri);
      
    });  
  };

  //remove Error
  const removeError=()=>{
    setError("")
  }
console.log(redirect_uri)



    return (
        // <div id="login">
        //     <h2>please Login</h2>
        //     <form className="regi">
        //           <input className="input-style" type="email" placeholder="Enter Email" />
        //           <br />
        //           <input className="input-style" type="password" placeholder="Enter password"/>
        //           <br />
        //           <input className="submit-btn" type="submit" value="Submit" />
        //      </form>
        //     <h1>---------Or----------</h1>
        //     <button onClick={signInUsingGoogle} className="btn btn-primary">Google Sign In</button>
        //      <p>New User? <a href="/register">Register</a></p>
        // </div>

        <div className="row">
      <div className="col-md-6 col-sm-12 col-12 login-section">
        <div>
          <h1>Please Login</h1>
          <form action="" onSubmit={submitForLogin}>
            <input
              onBlur={loginEmail}
              type="email"
              placeholder="Enter your email"
              className="input-field"
            />
            <br />

            <input
              onBlur={logInPassword}
              type="password"
              placeholder="Enter your password"
              className="input-field"
            />
            <br />
            <p className="text-danger">{error}</p>
            <input
              className="btn btn-warning"
              type="submit"
              className="input-field"
            />
            <br />
          </form>
          <p>{user?.displayName}</p>
          <button onClick={handleGoogleSignIn} className="btn btn-success">
            Sign in with google
          </button>
          <br />
          
          <h5 className="mt-4">New in mediDocs? Click Below </h5>
          <Link to="/newUser/register">
            <h3 className="common-toggle" onClick={removeError}>Please Register Now</h3>
          </Link>
        </div>
      </div>
      <div className="col-md-6 col-sm-12 col-12">
        <img class="img-fluid" src="https://image.freepik.com/free-vector/detailed-mental-health-facebook-post_52683-70003.jpg" alt="" />
      </div>
    </div>
    );
};

export default Login;