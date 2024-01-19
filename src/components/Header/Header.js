import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const HeaderContainer = styled.div`
  background-color: pink;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: ${slideIn} 0.5s ease-in-out;
`;

const CloseButton = styled.span`
  cursor: pointer;
`;

const Header = ({ text, onClose }) => {
  return (
    <HeaderContainer>
      <div>{text}</div>
      <CloseButton onClick={onClose}>&times;</CloseButton>
    </HeaderContainer>
  );
};

export default Header;
