import {
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  ADD_ITEM_FAILURE,
} from 'redux/actionTypes';

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
      method: `1. Prepare ingredients.
      2. Cook meal.`,
    },
  ],
};

const foodlistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        authErr: null,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        authErr: payload.authErr,
      };
    case SIGNOUT_SUCCESS:
      return {
        ...state,
        signOutErr: null,
      };
    case SIGNOUT_FAILURE:
      return {
        ...state,
        signOutErr: payload.signOutErr,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        authErr: null,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        authErr: payload.registerErr,
      };
    case ADD_ITEM:
      return {
        meals: [...state.meals, payload.meal],
      };
    case ADD_ITEM_FAILURE:
      return {
        ...state,
        createErr: payload.createErr,
      };
    case DELETE_ITEM:
      return {
        meals: state.meals.filter((item) => item.name !== payload.mealName),
      };
    case EDIT_ITEM: {
      const [meal] = state.meals.filter((item) => item.name === payload.mealName);

      if (meal) {
        const otherMeals = state.meals.filter((item) => item.name !== payload.mealName);
        const { content } = payload;
        const updatedMeal = {
          ...meal,
          ...content,
        };
        return {
          meals: [...otherMeals, updatedMeal],
        };
      }

      return {
        meals: [...state.meals],
      };
    }
    default:
      return state;
  }
};

export default foodlistReducer;
