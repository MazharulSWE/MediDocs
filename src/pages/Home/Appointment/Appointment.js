import React from 'react';
import './Appointment.css';

const Appointment = () => {
    return (
        <div id= "appointment" className="container m-5">
            <h1>📝Appointment📝</h1>
            <h3>don’t waste your time, make it online</h3>
            <div className="box">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Phone" />
            </div>
            <div className="button">
            <input type="text" placeholder="Message" />
            <button className="btn btn-primary">Submit Your request</button>
            </div>
        </div>
    );
};

export default Appointment;