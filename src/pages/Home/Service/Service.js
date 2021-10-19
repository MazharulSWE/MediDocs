import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const { id, name, description, img, specialist} = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h3>{specialist}</h3>
            <p>{description}</p>
            <Link to={`/details/${id}`}>
            <button>Learn More➡</button>
            </Link>
        </div>
    );
};

export default Service;