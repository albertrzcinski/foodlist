import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import CounterItem from 'components/molecules/CounterItem/CounterItem';
import MacroInfo from 'components/atoms/MacroInfo/MacroInfo';
import Button from 'components/atoms/Button/Button';
import CaloriesInfo from 'components/atoms/CaloriesInfo/CaloriesInfo';

const StyledWrapper = styled.div`
  padding: 40px 70px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const StyledCounterItem = styled(CounterItem)`
  margin-bottom: 10px;
`;

const MacroWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const CalorieCounter = () => (
  <StyledWrapper>
    <Heading>Calorie Counter</Heading>
    <StyledCounterItem name="Antipasati rigatoni" />
    <StyledCounterItem name="Antipasati rigatoni" />
    <StyledCounterItem name="Antipasati rigatoni" />

    <Heading as="h3">Total</Heading>
    <MacroWrapper>
      <CaloriesInfo value="725" />
      <MacroInfo kcal value={234} desc="Calories" />
      <MacroInfo big value={23} desc="Protein" />
      <MacroInfo big value={3} desc="Fat" />
      <MacroInfo big value={15} desc="Carbs" />
    </MacroWrapper>
    <Button>Add all to shopping list</Button>
  </StyledWrapper>
);

export default CalorieCounter;
