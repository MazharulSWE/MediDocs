import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.png';
import banner3 from '../../../images/banner/banner3.png';

const Banner = () => {
    return (
        <>
        <Carousel>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={banner1}
    alt="First slide"
  />
  <Carousel.Caption>
    <h2 className="text-primary">🎗We are MediDocs🎗</h2>
    <h5 className="text-primary">A Reliable Health Care Solution,Happy To See You healthy</h5>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={banner2}
    alt="Second slide"
  />

  <Carousel.Caption>
    <h2 className="text-primary">🩺People Trust Us🩺</h2>
    <h5 className="text-primary">Because Our Patients are Our Family and We Care of Them More Than Anything</h5>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={banner3}
    alt="Third slide"
  />

  <Carousel.Caption>
    <h2 className="text-primary">☄Make An Appointment☄</h2>
    <h5 className="text-primary">Our Doctors Are Well Experienced and They Are Eagerly Waiting To Serve You</h5>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>  
      </>
    );
};

export default Banner;
