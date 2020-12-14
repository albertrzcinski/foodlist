import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import CounterItem from 'components/molecules/CounterItem/CounterItem';
import MacroGroup from 'components/molecules/MacroGroup/MacroGroup';
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
const dummyMacros = [
  {
    value: 252,
    desc: 'Protein',
  },
  {
    value: 173,
    desc: 'Fat',
  },
  {
    value: 604222,
    desc: 'Carbs',
  },
];

const CalorieCounter = () => (
  <StyledWrapper>
    <Heading>Calorie Counter</Heading>
    <StyledCounterItem name="Antipasati rigatoni" />
    <StyledCounterItem name="Antipasati rigatoni" />
    <StyledCounterItem name="Antipasati rigatoni" />

    <Heading as="h3">Total</Heading>
    <MacroWrapper>
      <CaloriesInfo value={725} />
      <MacroGroup macros={dummyMacros} gap="10px" />
    </MacroWrapper>
    <Button>Add all to shopping list</Button>
  </StyledWrapper>
);

export default CalorieCounter;
