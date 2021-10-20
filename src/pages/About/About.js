import React from 'react';
import './About.css';

const About = () => {
    return (
        <div id="/about">
            <h1>💊About MediDocs💊</h1>
            <h3>"We Care, We am Reliable, We Make a Difference"</h3>
            <div className="d-flex about">
                <img src="https://i.ibb.co/bz3nYQs/hospital-removebg-preview.png" alt="" />
                <p className="mt-5">To better cater to the international market, given the growing medical tourism industry, MediDocs Medical Centre has embarked on an extensive expansion plan, next to the existing hospital building. Tower C has completed its first phase in October of 2020 with the opening of the new Cancer & Radiosurgery Centre and Nuclear Medicine Centre, which will also house other Centres of Excellence such as Digestive Health Centre and Dialysis Centre. The second phase, with a 10-level tower, housing single room wards and consultation suites, has also completed and started its operations mid-2020. This sets MediDocs Medical Centre as one of the leading private medical centres in the region.
                MediDocs Medical Centre offers a comprehensive range of medical services, which include facilities and advanced medical technologies for outpatient and inpatient specialty care, health and wellness programmes and 24-hour emergency services.These are coupled with a strong support system comprising of 2,000 dedicated personnel including medical consultants, professional allied health staff as well as trained and dedicated nursing staff.</p>
            </div>
        </div>
    );
};

export default About;