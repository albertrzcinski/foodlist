import { ADD_ITEM, DELETE_ITEM } from './actionTypes';

export const addMeal = (content) => ({
  type: ADD_ITEM,
  payload: {
    meal: { ...content },
  },
});

export const deleteMeal = (mealName) => ({
  type: DELETE_ITEM,
  payload: {
    mealName,
  },
});
