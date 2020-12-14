import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import xIcon from 'assets/icons/x.svg';

const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.color.black};
  width: 100%;
  position: relative;
  padding: 5px 20px;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: absolute;
  right: 20px;
  top: 25%;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 5px 0;
  font-size: ${({ small, theme }) => small && theme.size.s};
`;

const CounterItem = ({ name, className }) => (
  <StyledWrapper className={className}>
    <StyledParagraph>{name}</StyledParagraph>
    {/* <StyledParagraph small>
      {data.protein} g | {data.fat} g | {data.carbs} g | {data.kcal} kcal
    </StyledParagraph> */}
    <StyledParagraph small>12 g | 23 g | 59 g | 394 kcal</StyledParagraph>
    <StyledButtonIcon secondary small icon={xIcon} />
  </StyledWrapper>
);

CounterItem.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  // data: PropTypes.objectOf().shape({
  //   protein: PropTypes.number.isRequired,
  //   fat: PropTypes.number.isRequired,
  //   carbs: PropTypes.number.isRequired,
  //   kcal: PropTypes.number.isRequired,
  // }).isRequired,
};

CounterItem.defaultProps = {
  className: '',
};

export default CounterItem;
