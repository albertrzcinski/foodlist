import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AddItemForm from 'components/molecules/AddItemForm/AddItemForm';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import { addMeal as addMealAction } from 'redux/actions';

const StyledWrapper = styled.div`
  width: 600px;
  padding: 1px 70px 50px 70px;
  background: grey;
  /* background: ${({ theme }) => theme.color.grey}; */
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.size.xxl};
  text-align: center;

  @media (max-height: 799px) {
    font-size: ${({ theme }) => theme.size.xl};
    margin: 15px 0;
  }
`;

const NewItemSidebar = ({ className, addMeal }) => (
  <StyledWrapper className={className}>
    <StyledHeading>Add new meal</StyledHeading>
    <AddItemForm onSubmitFn={addMeal} />
  </StyledWrapper>
);

NewItemSidebar.propTypes = {
  className: PropTypes.string,
  addMeal: PropTypes.func.isRequired,
};

NewItemSidebar.defaultProps = {
  className: '',
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMeal: (content) => dispatch(addMealAction(content)),
  };
};

export default connect(null, mapDispatchToProps)(NewItemSidebar);
