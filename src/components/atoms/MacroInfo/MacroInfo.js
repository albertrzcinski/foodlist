import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Rectangle = styled.div`
  padding: 5px 10px;
  border: 2px solid ${({ theme }) => theme.color.borderGreen || 'lightgreen'};
  border-radius: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: ${({ kcal, theme }) => kcal && theme.color.lightOrange};

  ${({ big }) =>
    big &&
    css`
      height: 80px;
    `}
`;

const Text = styled.span`
  font-size: ${({ normal, theme }) => (normal ? theme.size.s : theme.size.xs)};
  display: block;
  padding: 5px 0;

  ::first-letter {
    text-transform: uppercase;
  }

  ${({ big }) =>
    big &&
    css`
      font-size: ${({ theme }) => theme.size.l};
    `};

  ${({ bold }) =>
    bold &&
    css`
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    `};
`;

const MacroInfo = ({ big, kcal, value, desc, className }) => {
  if (kcal) {
    return (
      <Rectangle big kcal className={className}>
        <Text big bold>
          {value} kcal
        </Text>
        <Text normal> {desc.toUpperCase()} </Text>
      </Rectangle>
    );
  }

  return big ? (
    <Rectangle big className={className}>
      <Text big bold>
        {value} g
      </Text>
      <Text normal> {desc.toUpperCase()} </Text>
    </Rectangle>
  ) : (
    <Rectangle className={className}>
      <Text normal> {value} g </Text>
      <Text> {desc} </Text>
    </Rectangle>
  );
};

MacroInfo.propTypes = {
  big: PropTypes.bool,
  kcal: PropTypes.bool,
  value: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  className: PropTypes.string,
};

MacroInfo.defaultProps = {
  big: false,
  kcal: false,
  className: '',
};

export default MacroInfo;
