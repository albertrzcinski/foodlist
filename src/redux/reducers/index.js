import { ADD_ITEM, DELETE_ITEM } from 'redux/actionTypes';

const initialState = {
  meals: [
    {
      name: 'Makaron z kurczakiem',
      desc: 'Bardzo dobry makaron z kurczakiem.',
      time: '20',
      servings: '2',
      kcal: '850',
      protein: '35',
      fat: '5',
      carbs: '80',
      type: 'breakfast',
      ingredients: [
        {
          name: 'Makaron',
          quantity: '150g',
        },
        {
          name: 'Pierś z kurczaka',
          quantity: '170g',
        },
      ],
    },
  ],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM:
      return {
        meals: [...state.meals, payload.meal],
      };
    case DELETE_ITEM:
      return {
        meals: state.meals.filter((item) => item.name !== payload.mealName),
      };
    default:
      return state;
  }
};

export default rootReducer;
