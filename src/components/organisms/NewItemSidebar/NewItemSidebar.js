import React from 'react';
import styled from 'styled-components';
import AddItemForm from 'components/molecules/AddItemForm/AddItemForm';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  width: 600px;
  padding: 1px 70px 50px 70px;
  background: ${({ theme }) => theme.color.grey};
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.size.xl};
  text-align: center;
`;

const NewItemSidebar = () => (
  <StyledWrapper>
    <StyledHeading>Add new recipe</StyledHeading>
    <AddItemForm />
  </StyledWrapper>
);

export default NewItemSidebar;
