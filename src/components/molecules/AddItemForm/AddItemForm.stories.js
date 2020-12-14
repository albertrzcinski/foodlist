import React from 'react';
import styled from 'styled-components';
import AddItemForm from './AddItemForm';

const StyledWrapper = styled.div`
  width: 450px;
`;

export const Default = () => (
  <StyledWrapper>
    <AddItemForm />
  </StyledWrapper>
);

export default {
  title: 'Molecules/AddItemForm',
  component: AddItemForm,
};
