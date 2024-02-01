// ServicePage.js
import React from 'react';
import ServiceCard from './ServiceCard';
import { serviceData } from './data';
import './ServicePage.css';

const ServicePage = () => {
  return (
    <div>
      <h2 style={{marginTop:'50px'}}>HAPPILY AT YOUR SERVICE</h2>
    <div className="service-page">
      
      {serviceData.map((item) => (
        <ServiceCard
          key={item.id}
          imageurl={item.imageurl}
          description={item.description}
          buttonText={item.buttonText}
        />
      ))}
    </div>
    </div>
  );
};

export default ServicePage;
