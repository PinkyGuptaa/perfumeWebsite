// ServiceCard.js
import React from 'react';
import './ServicePage.css'
const ServiceCard = ({ imageurl, description, buttonText }) => {
  return (
    <div className="service-card">
      
      <img src={imageurl} alt="Service" className="card-image" />
      <div className="card-content">
        <p className="card-description">{description}</p>
        <button className="card-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default ServiceCard;
