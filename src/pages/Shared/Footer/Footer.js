import React from 'react';
import './Footer.css';

const Footer = () => { 
    return (
        <div id="footer">
            <h2>JOIN OUR FREE NEWSLETTER</h2>
            <p>stay safe and be healthy with us</p>
            <input type="text" placeholder="Email" />
            <button>Subscribe</button>
            <p>Copyright © 2021 MediDocs All Rights Reserved.</p>
        </div>
    );
};

export default Footer;