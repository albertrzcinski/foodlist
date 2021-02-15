import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';
import Logo from 'components/atoms/Logo/Logo';
import { connect } from 'react-redux';
import { logOut as logOutAction } from 'redux/actions';

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
  padding: 7px 0;
  margin: 10px 40px;
`;

const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;

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

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding-right: 50px;
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

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  background: ${({ theme }) => theme.color.lightGrey};
  cursor: pointer;
  font-size: ${({ theme }) => theme.size.m};
`;

const Header = ({ logOut }) => (
  <HeaderWrapper>
    <nav>
      <List>
        <ListItem>
          <Logo />
        </ListItem>
        <ListItem>
          <StyledNavLink to={routes.breakfast}>Breakfast</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to={routes.lunch}>Lunch</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to={routes.dinner}>Dinner</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledButton type="button" onClick={logOut}>
            Log out
          </StyledButton>
        </ListItem>
      </List>
    </nav>
    <InputWrapper>
      <Input search id="search" type="search" placeholder="eg. Oatmeal" />
      <StyledLabel htmlFor="search"> Find meal </StyledLabel>
    </InputWrapper>
  </HeaderWrapper>
);

Header.propTypes = {
  logOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOutAction()),
});

export default connect(null, mapDispatchToProps)(Header);
