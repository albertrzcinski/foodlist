import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';

const List = styled.ul`
  list-style: none;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.size.l};
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

const ListItem = styled.li`
  position: relative;
  padding: 10px 20px;
  margin: 10px 30px;

  &.active {
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: calc(50% - 4px);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.lightGreen};
    }
  }
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 3.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-style: italic;
  color: ${({ theme }) => theme.color.lightGreen};
`;

const HeaderWrapper = styled.header`
  /* display: flex; */
  padding: 0 70px 0 20px;
`;

const StyledLabel = styled.label`
  position: absolute;
  left: 45px;
  color: ${({ theme }) => theme.color.borderGreen};
  transition: all 0.2s;
  touch-action: manipulation;
  cursor: text;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-left: auto;
`;

const Header = () => (
  <HeaderWrapper>
    <nav>
      <List>
        <ListItem>
          <Logo> FoodList </Logo>
        </ListItem>
        <ListItem className="active">Breakfast</ListItem>
        <ListItem>Lunch</ListItem>
        <ListItem>Dinner</ListItem>
      </List>
    </nav>
    <InputWrapper>
      <Input search id="search" type="search" placeholder="eg. Oatmeal" />
      <StyledLabel htmlFor="search"> Find meal </StyledLabel>
    </InputWrapper>
  </HeaderWrapper>
);

export default Header;
