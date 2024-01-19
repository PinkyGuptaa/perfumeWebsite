import React from 'react';
import styled from 'styled-components';
import bestsellersImage from '../../assets/Bestsellers_category.jpg';
import makeupImage from '../../assets/Makeup_category.jpg';
import fragranceImage from '../../assets/Fragnance-Category.jpg';
import skincareImage from '../../assets/Category-Skincare.jpg';

const CategoryCardsContainer = styled.div`
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const CategoryCard = styled.div`
  width: 200px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
`;

const CategoryCards = () => {
    const categories = [
        { name: 'Bestsellers', image: bestsellersImage },
        { name: 'Makeup', image: makeupImage },
        { name: 'Fragrance', image: fragranceImage },
        { name: 'Skincare', image: skincareImage },
      ];
  const handleCardClick = (category) => {
    // Add logic for handling card click (e.g., navigate to a specific category)
    console.log(`Clicked on ${category}`);
  };

  return (
    <CategoryCardsContainer>
      <h2>Shop by Category</h2>
      <CardContainer>
        {categories.map((category) => (
          <CategoryCard key={category.name} onClick={() => handleCardClick(category)}>
            <img src={category.image} alt={category.name} style={{ maxWidth: '100%', marginBottom: '10px' }} />
            <div>{category.name}</div>
          </CategoryCard>
        ))}
      </CardContainer>
    </CategoryCardsContainer>
  );
};

export default CategoryCards;
