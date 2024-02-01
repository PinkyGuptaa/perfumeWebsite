// YourMainPage.js
import React from 'react';
import OffersSlider from './OffersSlider';
import img1 from '../../assets/exclusiveoffers/1.jpg';
import img2 from '../../assets/exclusiveoffers/2.jpg';
import img3 from '../../assets/exclusiveoffers/3.jpg';
import img4 from '../../assets/exclusiveoffers/4.jpg';
 
const offersData = [
  {
    id: 1,
    imageUrl: img1,
    name: 'Take 10% off your first order',
    description: 'Bonjour and welcome to Lancômes Online Store Discover the best Lancôme products by checking our Online Exclusives and Bestsellers!',
  },
  {
    id: 2,
    imageUrl: img2,
    name: 'Free Shipping',
    description: 'Avail free shipping on all orders with no minimum spend limit.',
  },
  {
    id: 3,
    imageUrl: img3,
    name: 'Packaged in Pink',
    description: 'All orders come packed in a luxurious pink box, ready for you to gift happiness.',
  },
  {
    id: 4,
    imageUrl: img4,
    name: 'Complimentary Samples',
    description: 'Get 2 complimentary Lancôme gifts with every purchase!',
  },
  // Add more offers...
];

const YourMainPage = () => {
  return (
    <div>
      {/* Other content */}
      <OffersSlider offersData={offersData} />
      {/* Other content */}
    </div>
  );
};

export default YourMainPage;
