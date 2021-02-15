import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.span`
  margin: 0;
  font-size: 3.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-style: italic;
  color: ${({ theme }) => theme.color.lightGreen};
`;

const Logo = () => <StyledHeading> FoodList </StyledHeading>;

export default Logo;
