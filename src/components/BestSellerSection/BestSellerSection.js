import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import img1 from '../../assets/category/1.jpg';
import img2 from '../../assets/category/2.jpg';
import img3 from '../../assets/category/3.jpg';
import img4 from '../../assets/category/4.jpg';

const PinkDiv = styled.div`
  background-color: #FFF5EE;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PinkCarouselContainer = styled.div`

`;

const CarouselCard = styled.div`
  width: 150px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  margin: 10px;
`;

const CarouselImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const ProductName = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const ProductDetails = styled.div`
  margin-bottom: 5px;
`;

const Rating = styled.div`
  color: #FFD700; /* Gold color for rating */
  margin-bottom: 5px;
`;

const AddToCartButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const carouselItems = [
  {
    name: 'Item 1',
    details: 'Details of Product 1. This is a detailed description providing more information about the product.',
    rating: 4.5,
    image: img1,
  },
  {
    name: 'Item 2',
    details: 'Details of Product 2. This is a detailed description providing more information about the product.',
    rating: 4.2,
    image: img2,
  },
  {
    name: 'Item 3',
    details: 'Details of Product 3. This is a detailed description providing more information about the product.',
    rating: 4.8,
    image: img3,
  },
  {
    name: 'Item 4',
    details: 'Details of Product 4. This is a detailed description providing more information about the product.',
    rating: 4.0,
    image: img4,
  },
  // Add other items...
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const SimplePinkDiv = () => {
  return (
    <PinkDiv>
      <PinkCarouselContainer>
        <h2>Shop BestSellers</h2>
        <Slider {...settings}>
          {carouselItems.map((item, index) => (
            <CarouselCard key={index}>
              <CarouselImage src={item.image} alt={item.name} />
              <ProductName>{item.name}</ProductName>
              <ProductDetails>{item.details}</ProductDetails>
              <Rating>Rating: {item.rating}</Rating>
              <AddToCartButton>Add to Cart</AddToCartButton>
            </CarouselCard>
          ))}
        </Slider>
      </PinkCarouselContainer>
    </PinkDiv>
  );
};

export default SimplePinkDiv;
