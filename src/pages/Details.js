import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toLowerCaseWithDash } from 'utilities/functions';
import { Redirect, useParams } from 'react-router-dom';
import { routes } from 'routes/index';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';

const Details = ({ meals, uid }) => {
  const { name } = useParams();

  if (!uid) {
    return <Redirect to={routes.home} />;
  }

  if (!isLoaded(meals)) {
    return <p>Loading...</p>;
  }

  const meal = meals.filter((item) => toLowerCaseWithDash(item.name) === name);

  if (meal.length) {
    const [item] = meal;

    return (
      <DetailsTemplate
        id={item.id}
        name={item.name}
        time={item.time}
        servings={item.servings}
        description={item.desc}
        kcal={item.kcal}
        protein={item.protein}
        fat={item.fat}
        carbs={item.carbs}
        ingredients={item.ingredients}
        method={item.method}
      />
    );
  }

  return <Redirect to={routes.home} />;
};

const stringProp = PropTypes.string.isRequired;

Details.propTypes = {
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
      method: PropTypes.string,
    }),
  ).isRequired,
  uid: PropTypes.string.isRequired,
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
)(Details);
