import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import BannerSlider from './components/BannerSlider/BannerSlider';
import CategoryCards from './components/CategoryCards/categoryCards';
import BestSellerSection from './components/BestSellerSection/BestSellerSection';
import LimitedEdition from './components/LimitedEdition/LimitedEdition'
import Service from './components/Service/Service'
import ExclusiveOffer from './components/ExclusiveOffers/ExclusiveOffer';
import AccordionSection from './components/Accordion/AccordionSection';
import FooterTop from './components/Footer/FooterTop';

function App() {
  const [isHeaderVisible, setHeaderVisibility] = useState(true);

  const handleCloseHeader = () => {
    setHeaderVisibility(false);
  };

  return (
    <div className="App">
      
      {isHeaderVisible && (
        <Header text="Your Sliding Header Text" onClose={handleCloseHeader} />
      )}

      <Navbar />
      <BannerSlider/>
      <CategoryCards/>
      <BestSellerSection/>
      <LimitedEdition/> 
      <Service />
      <ExclusiveOffer/>
      <AccordionSection/>
      <FooterTop/>
    </div>
  );
}

export default App;
