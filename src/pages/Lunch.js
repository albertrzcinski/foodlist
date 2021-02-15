import React from 'react';
import PropTypes from 'prop-types';
import DashboardTemplate from 'templates/DashboardTemplate';
import Card from 'components/organisms/Card/Card';
import { connect } from 'react-redux';
import { TYPE_OF_MEALS } from 'utilities/constants';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes';

const Lunch = ({ lunchMeals, uid }) => {
  if (!uid) {
    return <Redirect to={routes.home} />;
  }
  return (
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
};
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
  uid: PropTypes.string,
};

Lunch.defaultProps = {
  lunchMeals: [],
  uid: null,
};

const mapStateToProps = ({ foodlist: { meals }, firebase: { auth } }) => {
  const lunchMeals = meals.filter((item) => item.type === TYPE_OF_MEALS.LUNCH);
  return { lunchMeals, uid: auth.uid };
};

export default connect(mapStateToProps, null)(Lunch);
