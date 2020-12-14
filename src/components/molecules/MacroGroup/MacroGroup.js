import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MacroInfo from 'components/atoms/MacroInfo/MacroInfo';

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledMacroInfo = styled(MacroInfo)`
  margin-left: ${({ gap }) => gap};
`;

const MacroGroup = ({ macros, isBig, gap }) => (
  <StyledWrapper>
    {macros.map((item) => (
      <StyledMacroInfo big={isBig} value={item.value} desc={item.desc} gap={gap} />
    ))}
  </StyledWrapper>
);

MacroGroup.propTypes = {
  macros: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isBig: PropTypes.bool,
  gap: PropTypes.string,
};

MacroGroup.defaultProps = {
  isBig: false,
  gap: '20px',
};

export default MacroGroup;
