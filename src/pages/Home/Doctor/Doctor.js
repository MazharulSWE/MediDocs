import React from 'react';
import './Doctor.css';

const Doctor = ({doctors}) => {
    const {name, specialist, img, country, description} = doctors;
    return (
        <div className="doctor pb-3">
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h3>{specialist}</h3>
            <h5>{country}</h5>
            <p>{description}</p>
            <button>Contact Me</button>
        </div>
    );
};

export default Doctor;