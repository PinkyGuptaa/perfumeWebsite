// FooterTop.js
import React from 'react';
import './FooterTop.css';
import freeShippingImage from '../../assets/footer/shipping.jpg';
import serviceImage from '../../assets/footer/samples.jpg';
import samplesImage from '../../assets/footer/easy-checkout_v3.jpg';
import securePaymentImage from '../../assets/footer/complimentary-engraving_v3.jpg';
import tryOnMakeupImage from '../../assets/footer/VTO_Female Face Icon_75X75_Option1.jpg';

const footerItems = [
  { image: freeShippingImage, text: 'Free Shipping & 24/7 Service' },
  { image: serviceImage, text: 'Complimentary Samples With Every Order' },
  { image: samplesImage, text: 'Secure Payment' },
  { image: securePaymentImage, text: 'Online Exclusive Offers' },
  { image: tryOnMakeupImage, text: 'Try on Makeup Virtually!' },
];

const FooterTop = () => {
  return (
    <div className="footer-top">
      {footerItems.map((item, index) => (
        <div key={index} className="footer-item">
          <img src={item.image} alt={`Item ${index + 1}`} style={{ width: '50px', height: '50px' }} />
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default FooterTop;
