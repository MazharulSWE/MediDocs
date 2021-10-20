import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css';

const Details = () => {
    const [details, setDetails] = useState([]);
    const {serviceId} = useParams();

   useEffect(()=>{
       fetch('/services.json')
       .then(res=> res.json())
       .then(data =>setDetails(data))
   },[]);

   const findDetail = details.find((detail)=> detail.id == serviceId);
   console.log(findDetail);

    return (
        <div className="service pb-3">
            <img src={findDetail?.img} alt="" />
            <h1>{findDetail?.name}</h1>
            <h3>{findDetail?.specialist}</h3>
            <p>{findDetail?.description}</p>
        </div>
    );
};

export default Details;