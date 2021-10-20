import { createUserWithEmailAndPassword, getAuth, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import initializeAuthentication from '../Firebase/firebase.init';
import './Register.css';

initializeAuthentication();

const auth = getAuth();

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorCommand, setErrorCommand] = useState("");

  //Destructure from Context API
  const { signInUsingGoogle, user} = useAuth();
  
  //User Name Value
  const userNameInput = (event) => {
    setUserName(event.target.value);
  };

  //Email Value
  const emailInput = (event) => {
    setEmail(event.target.value);
  };
  //Password Value
  const passwordInput = (event) => {
    setPassword(event.target.value);
  };
  

  const registrationFormSubmit = (event) => {
    event.preventDefault();
    console.log(userName, email, password.length);

    if (password.length < 8) {
        setErrorCommand("password must have 8 character");
    } else if (
      /(?=(?:[^A-Z]*[A-Z]){2})(?=(?:[^0-9]*[0-9]){2})/.test(password) === false
    ) {
        setErrorCommand("please try with two Upper case and 2 digit");
    } else {
        setErrorCommand("");
    }


     //Registration for user
    
     createUserWithEmailAndPassword(auth, email, password)
     .then((result) => {
       console.log(result.user)


       //   setError("");
      updateProfile (auth.currentUser,{displayName:userName})
      .then((result) => {
        console.log(result.user)
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
    })
    .catch((error) => {
        setErrorCommand(error.message);
    });
    console.log(user)
    
  };

  //
    return (
        <div className="registration-section">
        <h1>Please Register</h1>
        <form onSubmit={registrationFormSubmit} action="">
          <input
            type="text"
            placeholder="Enter your Name"
            className="input-field"
            required
            onBlur={userNameInput}
          />
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            className="input-field"
            required
            onBlur={emailInput}
          />
          <br />
  
          <input
            type="password"
            placeholder="Enter your password"
            required
            className="input-field"
            onBlur={passwordInput}
          />
          <br />
          <p className="text-danger">{errorCommand}</p>
          <input
            className="btn btn-warning"
            type="Submit"
            className="input-field submit-btn"
          />
          <br />
        </form>
        <h5> Already registered?</h5>{" "}
        <Link to="/login">
          <h4>Click Here <span className="common-toggle">just Login</span></h4>
        </Link>
        <br />
        ----------OR-------
        <br />
        <button onClick={signInUsingGoogle} className="btn btn-success">
          Sign in with google
        </button>
      </div>   
      
    );
};

export default Register;