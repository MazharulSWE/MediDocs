import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(()=>{
        fetch('doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <div id="doctors">
           <h2 className="m-5">🎗Our Specialists🎗</h2>
           <div className="doctors-container">
                {
                    doctors.map(doctors=> <Doctor
                    key={doctors.id}
                    doctors={doctors}
                    ></Doctor>)
                }
           </div>
        </div>
    );
};

export default Doctors;