import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardPhoto from 'assets/photos/anna-pelzer-unsplash.jpg';
import CaloriesInfo from 'components/atoms/CaloriesInfo/CaloriesInfo';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import chevronIcon from 'assets/icons/chevron-right.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { Link, useRouteMatch } from 'react-router-dom';
import { toLowerCaseWithDash } from 'utilities/functions';
import MacroInfo from 'components/atoms/MacroInfo/MacroInfo';

const StyledWrapper = styled.div`
  width: 400px;
  box-shadow: 0 0 15px -5px ${({ theme }) => theme.color.black};
  border-radius: 10px;
  position: relative;
  padding: 190px 30px 15px 30px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledCaloriesInfo = styled(CaloriesInfo)`
  position: absolute;
  top: 160px;
  right: 35px;
`;

const StyledFlexWrapper = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 10px;
  }
`;

const StyledButtonIcon = styled(ButtonIcon)`
  margin-left: auto;
`;

const Card = ({ name, desc, kcal, protein, fat, carbs }) => {
  const match = useRouteMatch();

  return (
    <StyledWrapper>
      <StyledImage src={CardPhoto} alt="Card photo" />
      <StyledCaloriesInfo value={kcal} />
      <Heading>{name}</Heading>
      <Paragraph>{desc}</Paragraph>
      <StyledFlexWrapper>
        <MacroInfo value={protein} desc="Protein" />
        <MacroInfo value={fat} desc="Fat" />
        <MacroInfo value={carbs} desc="Carbs" />
        <StyledButtonIcon
          as={Link}
          icon={chevronIcon}
          to={`${match.url}/${toLowerCaseWithDash(name)}`}
        />
      </StyledFlexWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  kcal: PropTypes.string.isRequired,
  protein: PropTypes.string.isRequired,
  fat: PropTypes.string.isRequired,
  carbs: PropTypes.string.isRequired,
};

export default Card;
