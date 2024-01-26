import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import BannerSlider from './components/BannerSlider/BannerSlider';
import CategoryCards from './components/CategoryCards/categoryCards';
import BestSellerSection from './components/BestSellerSection/BestSellerSection';
import LimitedEdition from './components/LimitedEdition/LimitedEdition'
import Service from './components/Service/Service'
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
      {/* Your main content goes here */}
      <Navbar />
      <BannerSlider/>
      <CategoryCards/>
      <BestSellerSection/>
      <LimitedEdition/>
      <Service />
    </div>
  );
}

export default App;
