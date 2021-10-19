import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from "../../images/notfound.jpg";

const NotFound = () => {
    return (
        <div>
            <img style={{width:"40%"}} src={notfound} alt="" />
            <div className="text-center">
            <Link to="/"><Button className="outline-warning btn btn-warning px-5 text-white">Go Back</Button></Link>
            </div> 
        </div>
    );
};

export default NotFound;