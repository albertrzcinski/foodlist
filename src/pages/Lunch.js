import React from 'react';
import PropTypes from 'prop-types';
import DashboardTemplate from 'templates/DashboardTemplate';
import Card from 'components/organisms/Card/Card';
import { connect } from 'react-redux';
import { TYPE_OF_MEALS } from 'utilities/constants';

const Lunch = ({ lunchMeals }) => (
  <DashboardTemplate>
    <>
      {lunchMeals.map(({ name, desc, kcal, protein, fat, carbs }) => (
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

Lunch.propTypes = {
  lunchMeals: PropTypes.arrayOf(
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

Lunch.defaultProps = {
  lunchMeals: [],
};

const mapStateToProps = ({ meals }) => {
  const lunchMeals = meals.filter((item) => item.type === TYPE_OF_MEALS.LUNCH);
  return { lunchMeals };
};

export default connect(mapStateToProps, null)(Lunch);
