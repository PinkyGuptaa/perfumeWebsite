import React from 'react';
import styled from 'styled-components';
import logoImage from '../../assets/logo.png';

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: white;
  background-color: #333;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const LogoImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const RightSection = styled.div`
  display: flex;
  gap: 50px;
`;

const LeftSection = styled.div`
  display: flex;
  gap: 20px;
`;

const CenterSection = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavTabsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchBar = styled.input`
  padding: 5px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <TopSection>
        <LeftSection>
          <div>Store Locator</div>
          <div>Customer Service</div>
        </LeftSection>
        <CenterSection>
          <LogoImage src={logoImage} alt="Lancome Paris Logo" />
        </CenterSection>
        <RightSection>
          <div>My Account</div>
          <div>Cart</div>
        </RightSection>
      </TopSection>
      <BottomSection>
        <NavTabsContainer>
          <div>Limited Edition Kits</div>
          <div>Bestsellers</div>
          <div>Skincare</div>
          <div>Makeup</div>
        </NavTabsContainer>
        <SearchBarContainer>
          <SearchBar type="text" placeholder="Search..." />
        </SearchBarContainer>
      </BottomSection>
    </NavbarContainer>
  );
};

export default Navbar;
