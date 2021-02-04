import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from 'components/organisms/Header/Header';

const StyledWrapper = styled.div`
  padding-top: 30px;
`;

const UserTemplate = ({ children }) => (
  <StyledWrapper>
    <Header />
    {children}
  </StyledWrapper>
);

UserTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserTemplate;
