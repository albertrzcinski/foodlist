import React from 'react';
import styled from 'styled-components';
import Input from './Input';

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 20px;
  color: ${({ theme }) => theme.color.borderGreen};
  transition: all 0.2s;
  touch-action: manipulation;
  cursor: text;
`;

const StyledSearchLabel = styled(StyledLabel)`
  left: 45px;
`;

const Div = styled.div`
  position: relative;
`;

export const Primary = () => (
  <Div>
    <Input id="title" type="text" placeholder="eg. Oatmeal" />
    <StyledLabel htmlFor="title"> Title </StyledLabel>
  </Div>
);

export const SearchInput = () => (
  <Div>
    <Input search id="search" type="search" placeholder="eg. Oatmeal" />
    <StyledSearchLabel htmlFor="search"> Find meal </StyledSearchLabel>
  </Div>
);

export default {
  title: 'Atoms/Input',
  component: Input,
};
