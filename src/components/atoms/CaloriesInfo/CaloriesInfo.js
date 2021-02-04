import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  background: ${({ theme }) => theme.color.orange};
  border-radius: 25px;
  padding: 0 25px;
`;

const StyledText = styled.span`
  font-size: ${({ theme }) => theme.size.s};
`;

const CaloriesInfo = ({ value, className }) => (
  <StyledWrapper className={className}>
    <StyledText>{value} kcal</StyledText>
  </StyledWrapper>
);

CaloriesInfo.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

CaloriesInfo.defaultProps = {
  className: '',
};

export default CaloriesInfo;
