import React from 'react';
import PropTypes from 'prop-types';
import DashboardTemplate from 'templates/DashboardTemplate';
import Card from 'components/organisms/Card/Card';
import { connect } from 'react-redux';
import { TYPE_OF_MEALS } from 'utilities/constants';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';

const Dinner = ({ meals, uid }) => {
  if (!uid) {
    return <Redirect to={routes.home} />;
  }

  if (!isLoaded(meals)) {
    return (
      <DashboardTemplate>
        <p> Loading... </p>
      </DashboardTemplate>
    );
  }

  const dinnerMeals = meals.filter((item) => item.type === TYPE_OF_MEALS.DINNER);

  return (
    <DashboardTemplate>
      <>
        {dinnerMeals.length > 0 ? (
          dinnerMeals.map(({ id, name, desc, kcal, protein, fat, carbs }) => (
            <Card
              key={id}
              name={name}
              desc={desc}
              kcal={kcal}
              protein={protein}
              fat={fat}
              carbs={carbs}
            />
          ))
        ) : (
          <p> There is no dinner meals. </p>
        )}
      </>
    </DashboardTemplate>
  );
};
const stringProp = PropTypes.string.isRequired;

Dinner.propTypes = {
  meals: PropTypes.arrayOf(
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
  ).isRequired,
  uid: PropTypes.string,
};

Dinner.defaultProps = {
  uid: null,
};

const mapStateToProps = ({ firestore: { ordered }, firebase: { auth } }) => {
  return { meals: ordered.recipes, uid: auth.uid };
};

export default compose(
  firestoreConnect([
    {
      collection: 'recipes',
    },
  ]),
  connect(mapStateToProps, null),
)(Dinner);
