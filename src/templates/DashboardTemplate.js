import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import xIcon from 'assets/icons/x.svg';
import NewItemSidebar from 'components/organisms/NewItemSidebar/NewItemSidebar';
import DashboardContext from 'context';
import UserTemplate from './UserTemplate';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 400px);
  gap: 50px 100px;
  padding: 50px 50px;
  justify-content: center;
`;
const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 50px;
  right: 80px;
  z-index: 999;
  transform-origin: 20%;
`;

const StyledNewItemsSidebar = styled(NewItemSidebar)`
  min-height: 100vh;
  max-height: 100%;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(100%);
  z-index: 99;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0);
    `}
`;

const DashboardTemplate = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen((state) => !state);

  const context = {
    toggleIsOpen,
  };

  return (
    <UserTemplate>
      <DashboardContext.Provider value={context}>
        <StyledGrid>{children}</StyledGrid>
        <StyledButtonIcon secondary icon={isOpen ? xIcon : plusIcon} onClick={toggleIsOpen} />
        <StyledNewItemsSidebar isOpen={isOpen} />
      </DashboardContext.Provider>
    </UserTemplate>
  );
};

DashboardTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DashboardTemplate;
