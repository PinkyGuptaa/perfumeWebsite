// AccordionSection.js
import React, { useState } from 'react';
import './AccordionSection.css';

const AccordionSection = () => {
  const [accordionItems, setAccordionItems] = useState([
    {
      id: 1,
      title: 'Learn more about our Luxury Beauty products',
      content: `DISCOVER LUXURY PERFUME, MAKEUP & SKINCARE ONLINE AT LANCÔME INDIA\n\n
      Lancôme India offers luxurious beauty products including skincare, makeup, and perfume for women. Since the beginning,
      we have focused on innovation and pioneering science to bring the most advanced, transformational science to women
      all around the world. With innovative beauty products like Advanced Genifique Serum or iconic perfumes like La Vie Est Belle,
      we devote every working day to offering the best in beauty and French-style elegance. \n\n
      DISCOVER LUXURY PERFUME, MAKEUP & SKINCARE ONLINE AT LANCÔME INDIA\n\n
      LANCÔME INDIA ADVANCED SKINCARE SOLUTIONS\n\n
      Experience Lancôme India’s expertise on skincare innovations with our range of skincare products including face serums,
      cleansers, and face masks. Target your skin concerns like ageing, dryness, and fine lines with our pioneering skincare ranges.
      Shop by ingredients, skin type or skin concern to find the perfect skincare routine catered to your skin needs.
      Talk to us online, or in-person to receive personalized Lancôme India beauty advice.\n\n
      ICONIC AND TIMELESS PERFUMES BY LANCÔME INDIA\n\n
      Explore Lancôme’s irresistible fragrances including eau de toilette, eau de parfum, perfume gift sets and more.
      Try our best-selling feminine fragrance La Vie Est Belle for a signature Lancôme scent, or Tresor Eau De Parfum for a floral,
      fruity fragrance. Discover a scent for any occasion with Lancôme India.\n\n
      PUSH BOUNDARIES WITH PIONEERING MAKEUP BY LANCÔME INDIA\n\n
      Achieve bespoke makeup looks with Lancôme India’s wide range of makeup essentials including foundation, lipstick, and mascara.
      In face makeup we have the iconic Teint Idole Ultra Wear foundation and Teint Idole Ultra Wear All Over Concealer that offers
      24-hour wear and full coverage. For eye makeup, we offer eyeliners, eyeshadows, and a large variety of mascaras to achieve
      your desired look whether it be volume, lengthened or dramatized. Finish your makeup look with a bold or neutral lipstick
      like the L’Absolue Rouge Cream Lipstick that offers 18-hour comfort and a variety of shades. Not sure if a makeup product
      is right for you? Use our Virtual try On Tool to click, try and find your perfect match.`,
      isOpen: false
    },
    {
      id: 2,
      title: 'Are Lancôme products available in India?',
      content: 'Yes, Lancôme products are available in India. You can purchase Lancôme products online from our official website or visit our nearest outlet store.',
      isOpen: false
    },
    {
      id: 3,
      title: 'What is Lancômes best-selling product?',
      content: `Lancôme's best-selling products include La Vie Est Belle Eau De Parfum, Génifique skincare range and L’Absolu Rouge Lipsticks.
      You can purchase them from Lancôme’s official website or from Lancôme’s outlet store.`,
      isOpen: false
    },
    {
      id: 4,
      title: 'Is Lancôme Paris a luxury brand?',
      content: 'Yes, Lancôme Paris is a luxury brand which has now come to India. Discover Lancome’s innovative products in India ranging from irresistible perfumes, to luxurious makeup and advanced skincare.',
      isOpen: false
    },
    {
      id: 5,
      title: 'What are the iconic 5 products from Lancôme?',
      content: 'The 5 iconic products by Lancôme include La Vie Est Belle Eau De Parfum, Advanced Génifique Serum, Teint Idôle Ultra Wear Foundation, L\'Absolu Rouge Cream Lipsticks and Clarifique Dual Essence serum.',
      isOpen: false
    },
    {
      id: 6,
      title: 'Why shop online with us?',
      content: `Free delivery and free shipping\n
      Free samples\n
      Get 2 exclusive samples free with every order!\n\n
      Secure payment\n
      With visa mastercard paypal and afterpay\n\n
      Contact us anytime\n
      Reach us on with any questions anytime`,
      isOpen: false
    },
    
  ]);

  const toggleAccordion = (id) => {
    setAccordionItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : { ...item, isOpen: false }
      )
    );
  };

  return (
    <div className="accordion-container">
      <h1>DISCOVER LUXURY PERFUME, MAKEUP & SKINCARE ONLINE AT LANCÔME INDIA</h1>
      <h3>Lancôme India offers luxurious beauty products including skincare, 
        makeup and perfume for women. Since the beginning, 
        we have focused on innovation and pioneering science to bring the most advanced, 
        transformational science to women all around the world. 
        With innovative beauty products like Advanced Genifique Serum or iconic 
        perfumes like La Vie Est Belle, we devote every working day to offering 
        the best in beauty and French-style elegance.</h3>
      {accordionItems.map((item) => (
        <div key={item.id} className={`accordion-item ${item.isOpen ? 'open' : ''}`}>
          <div className="accordion-title" onClick={() => toggleAccordion(item.id)}>
            {item.title}
            <span>{item.isOpen ? '-' : '+'}</span>
          </div>
          {item.isOpen && <div className="accordion-content">{item.content}</div>}
          <div className="accordion-line"></div>
        </div>
      ))}
    </div>
  );
};

export default AccordionSection;
