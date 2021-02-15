import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toLowerCaseWithDash } from 'utilities/functions';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes/index';

const Details = ({ meal }) => {
  if (meal.length) {
    const [item] = meal;

    return (
      <DetailsTemplate
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
  meal: PropTypes.arrayOf(
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
};

const mapStateToProps = ({ foodlist: { meals } }, { match }) => {
  return {
    meal: meals.filter((item) => toLowerCaseWithDash(item.name) === match.params.name),
  };
};

export default connect(mapStateToProps, null)(Details);
