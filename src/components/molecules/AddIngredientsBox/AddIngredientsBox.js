import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import { Formik, Form, ErrorMessage } from 'formik';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import xIcon from 'assets/icons/x.svg';
import * as Yup from 'yup';

const StyledWrapper = styled.div`
  width: 500px;
`;

const StyledItem = styled.div`
  display: grid;
  grid-template-columns: 250px 150px 100px;
  justify-items: center;
  align-items: center;
  padding: 10px 0;
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 20px;
  color: ${({ theme }) => theme.color.borderGreen};
  transition: all 0.2s;
  touch-action: manipulation;
  cursor: text;
`;

const Div = styled.div`
  position: relative;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledError = styled(ErrorMessage)`
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.size.s};
  padding: 0 0 5px 5px;
  position: absolute;
  bottom: 5px;
  right: 15px;

  ${({ $small, theme }) =>
    $small &&
    css`
      font-size: ${theme.size.xs};
      bottom: 0;
    `}
`;

const AddIngredientsBox = ({ mealId, editMealFn, ingredientsProp }) => {
  const [ingredients, setIngredients] = useState(ingredientsProp);

  const names = ingredients.reduce((acc, curr) => acc.concat(curr.name), []).join(' *$| *');
  const regex = new RegExp(`^(?! *${names} *$).*`, 'gi');

  return (
    <StyledWrapper>
      {ingredientsProp
        ? ingredients.map((item) => (
            <StyledItem key={item.name}>
              <div>{item.name}</div>
              <div>{item.quantity}</div>
              <ButtonIcon
                small
                icon={xIcon}
                onClick={() =>
                  setIngredients((prevState) => prevState.filter((i) => i.name !== item.name))
                }
              />
            </StyledItem>
          ))
        : null}

      <FlexDiv>
        <Formik
          initialValues={{
            name: '',
            quantity: '',
          }}
          valmealIdationSchema={Yup.object().shape({
            name: Yup.string()
              .min(3, 'Too short!')
              .required('Required!')
              .matches(regex, { message: 'Name already exist!' }),
            quantity: Yup.number().required('Required!').typeError('It must be a number!'),
          })}
          onSubmit={(values, { resetForm }) => {
            setIngredients((prevState) => [
              ...prevState,
              { name: values.name, quantity: values.quantity },
            ]);
            resetForm();
          }}
        >
          {({ values, isSubmitting, handleChange, handleBlur }) => (
            <Form>
              <StyledItem>
                <Div>
                  <Input
                    id="name"
                    type="text"
                    placeholder="eg. Milk"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <StyledLabel htmlFor="name"> Name </StyledLabel>
                  <StyledError name="name" component="span" />
                </Div>
                <Div>
                  <Input
                    id="quantity"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="eg. 200"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.quantity}
                  />
                  <StyledLabel htmlFor="quantity"> Quantity [g] </StyledLabel>
                  <StyledError $small name="quantity" component="span" />
                </Div>
                <div>
                  <Button secondary type="submit" disabled={isSubmitting}>
                    Add
                  </Button>
                </div>
              </StyledItem>
            </Form>
          )}
        </Formik>

        {ingredients.length ? (
          <Button onClick={() => editMealFn(mealId, { ingredients: [...ingredients] })}>
            Save changes
          </Button>
        ) : null}
      </FlexDiv>
    </StyledWrapper>
  );
};

AddIngredientsBox.propTypes = {
  mealId: PropTypes.string.isRequired,
  editMealFn: PropTypes.func.isRequired,
  ingredientsProp: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default AddIngredientsBox;
