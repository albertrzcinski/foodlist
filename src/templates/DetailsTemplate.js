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
import { deleteMeal as deleteMealAction } from 'redux/actions';
import ConfirmModal from 'components/organisms/ConfimModal/ConfirmModal';

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

const StyledButtonsWrapper = styled.div`
  align-self: center;
`;

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
}) => {
  const [confirmModalVisability, setConfirmModalVisability] = useState(false);

  return (
    <>
      <ConfirmModal
        visible={confirmModalVisability}
        visibleFn={setConfirmModalVisability}
        onClickFn={deleteMeal}
        name={name}
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
              <StyledButtonsWrapper>
                <Button>Add to shopping list</Button>
                <Button secondary>Add to calculator</Button>
              </StyledButtonsWrapper>
            </StyledFlexWrapper>

            <StyledImage src={photo} />
            <StyledParagraph>{description}</StyledParagraph>

            <StyledMacroWrapper>
              <MacroInfo kcal value={kcal} desc="Calories" />
              <MacroInfo big value={protein} desc="Protein" />
              <MacroInfo big value={fat} desc="Fat" />
              <MacroInfo big value={carbs} desc="Carbs" />
            </StyledMacroWrapper>

            <Button tertiary onClick={() => setConfirmModalVisability(true)}>
              Delete meal
            </Button>
          </article>
        </StyledWrapper>
      </UserTemplate>
    </>
  );
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
};

const mapDispatchToProps = (dispatch) => ({
  deleteMeal: (mealName) => dispatch(deleteMealAction(mealName)),
});

export default connect(null, mapDispatchToProps)(DetailsTemplate);
