import React from 'react';
import PropTypes from 'prop-types';
import DashboardTemplate from 'templates/DashboardTemplate';
import Card from 'components/organisms/Card/Card';
import { connect } from 'react-redux';
import { TYPE_OF_MEALS } from 'utilities/constants';

const Dinner = ({ dinnerMeals }) => (
  <DashboardTemplate>
    <>
      {dinnerMeals.map(({ name, desc, kcal, protein, fat, carbs }) => (
        <Card
          key={name}
          name={name}
          desc={desc}
          kcal={kcal}
          protein={protein}
          fat={fat}
          carbs={carbs}
        />
      ))}
    </>
  </DashboardTemplate>
);

const stringProp = PropTypes.string.isRequired;

Dinner.propTypes = {
  dinnerMeals: PropTypes.arrayOf(
    PropTypes.shape({
      name: stringProp,
      desc: stringProp,
      time: stringProp,
      servings: stringProp,
      kcal: stringProp,
      protein: stringProp,
      fat: stringProp,
      carbs: stringProp,
      type: stringProp,
      ingredients: PropTypes.arrayOf(
        PropTypes.shape({
          name: stringProp,
          quantity: stringProp,
        }),
      ),
    }),
  ),
};

Dinner.defaultProps = {
  dinnerMeals: [],
};

const mapStateToProps = ({ meals }) => {
  const dinnerMeals = meals.filter((item) => item.type === TYPE_OF_MEALS.DINNER);
  return { dinnerMeals };
};

export default connect(mapStateToProps, null)(Dinner);
