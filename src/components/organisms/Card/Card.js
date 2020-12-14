import React from 'react';
import styled from 'styled-components';
import CardPhoto from 'assets/photos/anna-pelzer-unsplash.jpg';
import CaloriesInfo from 'components/atoms/CaloriesInfo/CaloriesInfo';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import MacroGroup from 'components/molecules/MacroGroup/MacroGroup';
import chevronIcon from 'assets/icons/chevron-right.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

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
  justify-content: space-between;
  align-items: center;
`;

const dummyMacros = [
  {
    value: 25,
    desc: 'Protein',
  },
  {
    value: 17,
    desc: 'Fat',
  },
  {
    value: 60,
    desc: 'Carbs',
  },
];

const Card = () => (
  <StyledWrapper>
    <StyledImage src={CardPhoto} alt="Card photo" />
    <StyledCaloriesInfo value={725} />
    <Heading>Antipasti rigatoni</Heading>
    <Paragraph>
      A great Italian-inspired recipe for a speedy, healthy supper. Using the best Italian antipasti
      ingredients and combining it with pasta is ideal for a mid-week meal.
    </Paragraph>
    <StyledFlexWrapper>
      <MacroGroup macros={dummyMacros} gap="5px" />
      <ButtonIcon icon={chevronIcon} />
    </StyledFlexWrapper>
  </StyledWrapper>
);

export default Card;
