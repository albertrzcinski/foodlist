import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from './actionTypes';

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

export const editMeal = (mealName, content) => ({
  type: EDIT_ITEM,
  payload: {
    mealName,
    content,
  },
});
