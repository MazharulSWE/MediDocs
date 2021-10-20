import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <h1 className="text-primary">☎Contact Us☎</h1>
            <div className="d-flex">
                <img className="ms-5 col-md-6 col-sm-12" src="https://i.ibb.co/2tzq8Hv/contact-removebg-preview.png" alt="" />
               <div className="contact">
               <input type="text" placeholder="Enter your Name" className="input-field" />
               <br />
               <input type="email" placeholder="Enter your email" className="input-field" />
              <br />
              <input type="email" placeholder="Enter your email" className="input-field" />
              <br />
              <button className="btn btn-primary px-5">Submit</button>
              </div>
            </div>
        </div>
    );
};

export default Contact;