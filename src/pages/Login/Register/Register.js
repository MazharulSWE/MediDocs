import React from 'react';
import './Register.css';

const Register = () => {
    return (
             <div >
             <form className="regi">
                  <input className="input-style" type="email" placeholder="Enter Email" />
                  <br />
                  <input className="input-style" type="password" placeholder="Enter password"/>
                  <br />
                  <input className="submit-btn" type="submit" value="Submit" />
             </form>
        </div>

    );
};

export default Register;