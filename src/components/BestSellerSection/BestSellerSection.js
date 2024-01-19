import React from 'react';
import styled from 'styled-components';

const BestSellerContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const ProductCard = styled.div`
  width: 200px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  margin: 10px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const ProductDescription = styled.div`
  margin-top: 10px;
`;

const BestSellerSection = () => {
  const bestSellerProducts = [
    {
      name: 'Product 1',
      description: 'Description of Product 1. This is a detailed description providing more information about the product.',
      rating: 4.5,
      amount: '$50.00',
      image: 'path/to/product1.jpg',
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2. This is a detailed description providing more information about the product.',
      rating: 4.2,
      amount: '$45.00',
      image: 'path/to/product2.jpg',
    },
    {
      name: 'Product 3',
      description: 'Description of Product 3. This is a detailed description providing more information about the product.',
      rating: 4.8,
      amount: '$60.00',
      image: 'path/to/product3.jpg',
    },
    {
      name: 'Product 4',
      description: 'Description of Product 4. This is a detailed description providing more information about the product.',
      rating: 4.0,
      amount: '$55.00',
      image: 'path/to/product4.jpg',
    },
  ];

  const handleCardClick = (product) => {
    // Add logic for handling card click (e.g., navigate to product details)
    console.log(`Clicked on ${product.name}`);
  };

  return (
    <BestSellerContainer>
      <h2>Shop Best Sellers</h2>
      <CardContainer>
        {bestSellerProducts.map((product) => (
          <ProductCard key={product.name} onClick={() => handleCardClick(product)}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductDescription>
              <div>{product.name}</div>
              <div>{product.description}</div>
              <div>Rating: {product.rating}</div>
              <div>Amount: {product.amount}</div>
            </ProductDescription>
          </ProductCard>
        ))}
      </CardContainer>
    </BestSellerContainer>
  );
};

export default BestSellerSection;
