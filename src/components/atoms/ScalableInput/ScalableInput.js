import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledInputWrapper = styled.div`
  position: relative;
  width: min-content;

  & > input {
    max-width: 450px;
    width: ${({ width, kcal }) => (kcal ? `${width + 40}px` : `${width}px`)};
    padding: ${({ kcal }) => (kcal ? '10px 50px 10px 130px' : '10px 30px 10px 110px')};
    font-family: 'Montserrat', sans-serif;
    font-size: ${({ theme }) => theme.size.m};
    border: 2px solid ${({ theme }) => theme.color.borderGreen};
    transition: all 0.2s;
    touch-action: manipulation;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 2px;
  left: 2px;
  background: ${({ theme }) => theme.color.lightGreen};
  height: 90%;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  ::first-letter {
    text-transform: uppercase;
  }

  ${({ kcal, theme }) =>
    kcal &&
    css`
      background: ${theme.color.orange};
      width: 110px;
    `}
`;

const StyledText = styled.span`
  position: absolute;
  top: 30%;
  right: 15px;
  color: ${({ theme }) => theme.color.grey};
`;

const calculateInputWidth = (value) => value * 1.5 + 210;

const ScalableInput = ({ children, isKcal, label, labelFor, value, className }) => (
  <StyledInputWrapper kcal={isKcal} width={calculateInputWidth(value)} className={className}>
    {children}
    <StyledLabel kcal={isKcal} htmlFor={labelFor}>
      {label}
    </StyledLabel>
    <StyledText>{isKcal ? 'kcal' : 'g'}</StyledText>
  </StyledInputWrapper>
);

ScalableInput.propTypes = {
  isKcal: PropTypes.bool,
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  labelFor: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  className: PropTypes.string,
};

ScalableInput.defaultProps = {
  isKcal: false,
  className: '',
};

export default ScalableInput;
