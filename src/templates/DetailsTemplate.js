import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserTemplate from 'templates/UserTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import clockIcon from 'assets/icons/clock.svg';
import peopleIcon from 'assets/icons/people.svg';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import MacroInfo from 'components/atoms/MacroInfo/MacroInfo';
import photo from 'assets/photos/anna-pelzer-unsplash.jpg';
import { connect } from 'react-redux';
import { deleteMeal as deleteMealAction, editMeal as editMealAction } from 'redux/actions';
import ConfirmModal from 'components/organisms/ConfimModal/ConfirmModal';
import AddIngredientsBox from 'components/molecules/AddIngredientsBox/AddIngredientsBox';
// import Input from 'components/atoms/Input/Input';

const StyledWrapper = styled.main`
  padding: 30px 550px 30px 100px;
`;
const StyledImage = styled.img`
  width: 460px;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  top: 0;
  right: 0;
`;
const StyledFlexWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 30px;
`;

const StyledTitleWrapper = styled.header`
  flex: 1;
  margin-right: 2px;
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ sizeL, theme }) => (sizeL ? theme.size.l : theme.size.xl)};
  flex: 1;
  margin: 15px 0;
`;

const StyledIconWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-left: 15px;
`;

const Icon = styled.div`
  width: 105px;
  height: 40px;
  background: url(${({ icon }) => icon}) 0% 50% / 30px no-repeat;
  padding-left: 40px;
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

// const StyledButtonsWrapper = styled.div`
//   align-self: center;
// `;

const StyledParagraph = styled(Paragraph)`
  line-height: 35px;
`;

const StyledMacroWrapper = styled.div`
  display: flex;
  padding: 20px 0;

  & > * {
    margin-right: 20px;
  }
`;

const StyledTextArea = styled.textarea`
  padding: 14px 20px;
  font-family: 'Montserrat', sans-serif;
  width: 500px;
  height: 160px;
  resize: none;
  overflow: auto;
  margin-right: 10px;
`;

const MethodWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
`;

const DetailsTemplate = ({
  name,
  time,
  servings,
  description,
  kcal,
  protein,
  fat,
  carbs,
  deleteMeal,
  editMeal,
  ingredients,
  method,
  id,
}) => {
  const [confirmModalVisability, setConfirmModalVisability] = useState(false);
  const [textareaValue, setTextareaValue] = useState(method);

  const handleTextareaChange = (e) => setTextareaValue(e.currentTarget.value);

  return (
    <>
      <ConfirmModal
        visible={confirmModalVisability}
        visibleFn={setConfirmModalVisability}
        onClickFn={deleteMeal}
        id={id}
      />
      <UserTemplate>
        <StyledWrapper>
          <article>
            <StyledFlexWrapper>
              <StyledTitleWrapper>
                <StyledHeading>{name}</StyledHeading>
                <StyledIconWrapper>
                  <Icon icon={clockIcon}>{time} min</Icon>
                  <Icon icon={peopleIcon}>{servings}</Icon>
                </StyledIconWrapper>
              </StyledTitleWrapper>
              {/* <StyledButtonsWrapper>
                <Button>Add to shopping list</Button>
                <Button secondary>Add to calculator</Button>
              </StyledButtonsWrapper> */}
            </StyledFlexWrapper>

            <StyledImage src={photo} />
            <StyledParagraph>{description}</StyledParagraph>

            <StyledMacroWrapper>
              <MacroInfo kcal value={kcal} desc="Calories" />
              <MacroInfo big value={protein} desc="Protein" />
              <MacroInfo big value={fat} desc="Fat" />
              <MacroInfo big value={carbs} desc="Carbs" />
            </StyledMacroWrapper>

            <StyledHeading sizeL>Ingredients</StyledHeading>

            <AddIngredientsBox mealId={id} editMealFn={editMeal} ingredientsProp={ingredients} />

            <StyledHeading sizeL>Method</StyledHeading>

            <MethodWrapper>
              <StyledTextArea
                as="textarea"
                id="method"
                name="method"
                type="text"
                placeholder="Enter method to prepare this meal..."
                value={textareaValue}
                onChange={handleTextareaChange}
              />

              <Button onClick={() => editMeal(id, { method: textareaValue })}> Save </Button>
            </MethodWrapper>

            <Button tertiary onClick={() => setConfirmModalVisability(true)}>
              Delete meal
            </Button>
          </article>
        </StyledWrapper>
      </UserTemplate>
    </>
  );
};

DetailsTemplate.defaultProps = {
  ingredients: [],
  method: '',
};

DetailsTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  servings: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  kcal: PropTypes.string.isRequired,
  protein: PropTypes.string.isRequired,
  fat: PropTypes.string.isRequired,
  carbs: PropTypes.string.isRequired,
  deleteMeal: PropTypes.func.isRequired,
  editMeal: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.string.isRequired,
    }),
  ),
  method: PropTypes.string,
  id: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteMeal: (mealId) => dispatch(deleteMealAction(mealId)),
  editMeal: (mealId, content) => dispatch(editMealAction(mealId, content)),
});

export default connect(null, mapDispatchToProps)(DetailsTemplate);
