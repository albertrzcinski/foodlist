import React from 'react';
import PropTypes from 'prop-types';
import DashboardTemplate from 'templates/DashboardTemplate';
import Card from 'components/organisms/Card/Card';
import { connect } from 'react-redux';
import { TYPE_OF_MEALS } from 'utilities/constants';

const Breakfast = ({ breakfastMeals }) => (
  <DashboardTemplate>
    <>
      {breakfastMeals.map(({ name, desc, kcal, protein, fat, carbs }) => (
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

Breakfast.propTypes = {
  breakfastMeals: PropTypes.arrayOf(
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

Breakfast.defaultProps = {
  breakfastMeals: [],
};

const mapStateToProps = ({ meals }) => {
  const breakfastMeals = meals.filter((item) => item.type === TYPE_OF_MEALS.BREAKFAST);
  return { breakfastMeals };
};

export default connect(mapStateToProps, null)(Breakfast);
