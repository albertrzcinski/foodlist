import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { useHistory } from 'react-router-dom';
import { routes } from 'routes/index';

const StyledWrapper = styled.div`
  padding: 1px 20px 10px;
  width: 500px;
  border: 1px solid green;
  position: absolute;
  top: 15%;
  left: calc(50% - 250px);
  z-index: 9999;
  background: whitesmoke;
  opacity: 0;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
    `}
`;

const StyledFlexDiv = styled.div`
  display: flex;
  justify-content: flex-end;

  & > * {
    margin-left: 5px;
  }
`;

const ConfirmModal = ({ visible, visibleFn, onClickFn, name }) => {
  const history = useHistory();
  return (
    <StyledWrapper isVisible={visible}>
      <Paragraph>Do you want to delete this meal from app ?</Paragraph>
      <StyledFlexDiv>
        <Button onClick={() => visibleFn(false)}> Cancel </Button>
        <Button
          tertiary
          onClick={() => {
            onClickFn(name);
            history.push(routes.home);
          }}
        >
          Delete
        </Button>
      </StyledFlexDiv>
    </StyledWrapper>
  );
};

ConfirmModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  visibleFn: PropTypes.func.isRequired,
  onClickFn: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default ConfirmModal;
